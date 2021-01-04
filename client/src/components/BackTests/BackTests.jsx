import React, { Component } from 'react';
import Graph from '../Dashboard/Graph/GraphWrapper';
import axios from 'axios';
import Controller from './BackTests.layer';
import {fetchBackTestsList, fetchBackTest} from '../../api/backTests';
import moment from 'moment';

// import LeftMenu from '../LeftMenu/LeftMenu';

class BackTests extends Component {

    backTest;
    selectedBackTest;

    constructor(props) {
        super(props);

        this.onChangeBackTest = this.onChangeBackTest.bind(this);

        this.state = {
            renderGraph: false,
            backTests: [],
            selectedBackTest: '',
            backTestData: []
        }
    }

    componentDidMount() {
        this.handleBackTestData();
    }

    async handleBackTestData() {
        // Fetch backtest list.
        const backTestsListResponse = await fetchBackTestsList();

        // Set first item in list as selected item on page load.
        let selectedBackTest = this.state.selectedBackTest === '' ? backTestsListResponse.data[0] : this.state.selectedBackTest;
        
        let displayData;

        // Fetch chosen backtest data
        try {
            const backTestResponse = await fetchBackTest(selectedBackTest);
            
            if(backTestResponse) {
                this.backTest = new Controller(backTestResponse.data);
                displayData = this.backTest.calculateDisplayData();
                
                this.setState({
                    backTests: backTestsListResponse.data,
                    selectedBackTest: selectedBackTest,
                    backTestData: {
                        graphData: displayData,
                    },
                    renderGraph: true
                });
            } else {
                this.setState({
                    backTests: backTestsListResponse.data,
                    backTestData: 'error'
                });
            }
        } catch (err) {
            this.setState({
                backTestData: 'error'
            })
        }
    }

    optionsLoader() {
        let backTests = this.state.backTests;
        let items = [];
        for(let i = 0; i < backTests.length; i++) {
            items.push(<option key={backTests[i]} value={backTests[i]}>{backTests[i]}</option>);
        }

        return items;
    }

    onChangeBackTest(e) {
		this.setState({
            selectedBackTest: e.target.value,
            renderGraph: false,
            backTestData: ''
        }, () => {
            this.handleBackTestData();
        });
    }

    graphLoader() {
        if(this.state.renderGraph === true) {
            return  <div className="row">
                        <div className="col-sm-10">
                            <Graph
                                graphText={{left: 'Total Return', middle: 'Number of Days', right: 'Number of trades'}}
                                graphHeaderData={{
                                    left: this.backTest.getTotalPnl(),
                                    middle: this.backTest.getNumberOfDays(),
                                    right: this.backTest.getTradesAmount()
                                }}
                                data={this.state.backTestData}
                                xAxis={'date'}
                                dataKey={{
                                    line: 'accumulatedPnl', 
                                    bar: 'pnl'
                                }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <ul className="list-group">
                                <li className="list-group-item">Symbol: <span className="backtest-properties">{this.backTest.instrument}</span></li>
                                <li className="list-group-item">Start: <span className="backtest-properties">{this.backTest.startTime}</span></li>
                                <li className="list-group-item">End: <span className="backtest-properties">{this.backTest.endTime}</span></li>
                                <li className="list-group-item">Fast: <span className="backtest-properties">{this.backTest.fastDuration}</span></li>
                                <li className="list-group-item">Slow: <span className="backtest-properties">{this.backTest.slowDuration}</span></li>
                                <li className="list-group-item">Exit: <span className="backtest-properties">{this.backTest.fastExitDuration}</span></li>
                                <li className="list-group-item">Bars: <span className="backtest-properties">{this.backTest.historicBars}</span></li>
                                <li className="list-group-item">Deviation: <span className="backtest-properties">{this.backTest.deviationFactor}</span></li>
                                <li className="list-group-item">PNL: <span className="backtest-properties">{this.backTest.getTotalPnl()}</span></li>
                                <li className="list-group-item">PNL %: <span className="backtest-properties">{this.backTest.getPnlPercent()}%</span></li>
                                <li className="list-group-item">Trades: <span className="backtest-properties">{this.backTest.getTradesAmount()}</span></li>
                                <li className="list-group-item">Wins: <span className="backtest-properties">{this.backTest.getWinsAndLosses().wins}</span></li>
                                <li className="list-group-item">Losses: <span className="backtest-properties">{this.backTest.getWinsAndLosses().losses}</span></li>
                                <li className="list-group-item">Avg. Win: <span className="backtest-properties">{this.backTest.getAverageWinsAndLosses().averageWin}</span></li>
                                <li className="list-group-item">Avg. Loss: <span className="backtest-properties">{this.backTest.getAverageWinsAndLosses().averageLoss}</span></li>
                                <li className="list-group-item">
                                    Stop Loss Points:
                                    <ul>
                                        <li className="list-group-item">Buy: <span className="backtest-properties">{this.backTest.stopLossPoints.buy}</span></li>
                                        <li className="list-group-item">Sell: <span className="backtest-properties">{this.backTest.stopLossPoints.sell}</span></li>
                                    </ul>
                                </li>
                                <li className="list-group-item">
                                    Trail Stop Percent:
                                    <ul>
                                        <li className="list-group-item">Buy: <span className="backtest-properties">{this.backTest.trailStopPoints.buy}%</span></li>
                                        <li className="list-group-item">Sell: <span className="backtest-properties">{this.backTest.trailStopPoints.sell}%</span></li>
                                    </ul>
                                </li>
                                <li className="list-group-item">Trade on Neutral: <span className="backtest-properties">{this.backTest.tradeOnNeutral}</span></li>
                            </ul>
                        </div>
                    </div>
        } else if(this.state.backTestData === 'error') {
            return  <div className="back-test-graph-loader">
                        <h4>No data to display</h4>
                    </div>
        } else {
            return  <div className="back-test-graph-loader">
                        <h4>Loading graph...</h4>
                    </div>
        }
    }

	render() {
		return (
            <div className="back-tests container-fluid pt-30">
                <form>
                    <label htmlFor="back-tests" className="col-form-label">Choose Backtest:</label>
                        <select id="#back-tests" required className="form-control back-tests-select" onChange={this.onChangeBackTest}>
                            {this.optionsLoader()}
                        </select>
                </form>
                {this.graphLoader()}
            </div>
        )
	}
}

export default BackTests;