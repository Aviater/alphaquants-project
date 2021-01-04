import React, { Component } from 'react';
import Graph from '../Dashboard/Graph/CandlestickChart';
import Controller from './Strategies.layer';
import EndDateTimePicker from '../DateTimePicker/EndDateTimePicker';
import StartDateTimePicker from '../DateTimePicker/StartDateTimePicker';
import Utils from '../../utils/Utils';
import {fetchStrategyData} from '../../api/strategies';
// import LeftMenu from '../LeftMenu/LeftMenu';

class Strategies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayData: '',
            tradingServer: 'trading01',
            tradingId: 'U3090334',
            tradingSymbol: 'DAX',
            signalSpeed: '1',
            startDateTime: Utils.getInitialDate().yesterday,
            endDateTime: Utils.getInitialDate().today
        }

        this.onChangeTradingServer = this.onChangeTradingServer.bind(this);
        this.onChangeTradingId = this.onChangeTradingId.bind(this);
        this.onChangeTradingSymbol = this.onChangeTradingSymbol.bind(this);
        this.onChangeSignalSpeed = this.onChangeSignalSpeed.bind(this);
        this.onChangeStartDateTime = this.onChangeStartDateTime.bind(this);
        this.onChangeEndDateTime = this.onChangeEndDateTime.bind(this);
    }

    componentDidMount() {
        this.handleStrategyData();
    }

    async handleStrategyData() {
        // Fetch strategy
        const strategyData = await fetchStrategyData(this.state.tradingServer, this.state.tradingId, this.state.tradingSymbol, this.state.signalSpeed, this.state.startDateTime, this.state.endDateTime);
        
        try {
            if(strategyData.data.length !== 0) {
                const strategy = new Controller(strategyData.data);
                this.setState({
                    displayData: strategy.formatDisplayData(),
                });
            } else {
                this.setState({
                    displayData: false
                });
            }
        } catch(err) {
            this.setState({
                displayData: 'error'
            });
        }
        
    }

    graphLoader() {
        if(this.state.displayData === false) {
            return  <div className="back-test-graph-loader">
                        <h4>No data to display</h4>
                    </div>
        } else if(this.state.displayData === 'error') {
            return  <div className="back-test-graph-loader">
                        <h4>There was a problem with the API connection</h4>
                    </div>
        } else {
            return  <Graph displayData={this.state.displayData}/>
        }
        
    }

    onChangeTradingServer(e) {
		this.setState({
            tradingServer: e.target.value
        }, () => {
            this.handleStrategyData();
        });
    }
    
    onChangeTradingId(e) {
		this.setState({
            tradingId: e.target.value
        }, () => {
            this.handleStrategyData();
        });
    }
    
    onChangeTradingSymbol(e) {
		this.setState({
            tradingSymbol: e.target.value
        }, () => {
            this.handleStrategyData();
        });
    }

    onChangeSignalSpeed(e) {
		this.setState({
            signalSpeed: e.target.value
        }, () => {
            this.handleStrategyData();
        });
    }
    
    onChangeStartDateTime(startDateTime) {
        this.setState({
            startDateTime: startDateTime.format('YYYY-MM-DDTHH:mm:ss')
        }, () => {
            this.handleStrategyData();
        });
    }

    onChangeEndDateTime(endDateTime) {
        this.setState({
            endDateTime: endDateTime.format('YYYY-MM-DDTHH:mm:ss')
        }, () => {
            this.handleStrategyData();
        });
    }

	render() {
		return (
            <div className="strategies container-fluid pt-30">
                <div className="row">
                    <div className="col-sm-2">
                        <label htmlFor="tradin-server">Trading Server</label>
                        <select id="trading-server" className="form-control" onChange={this.onChangeTradingServer}>
                            <option value="trading01">Trading 1</option>
                            <option value="trading02">Trading 2</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="trading-id">Trading ID</label>
                        <select id="trading-id" className="form-control" onChange={this.onChangeTradingId}>
                            <option value="U3090334">U3090334</option>
                            <option value="U4043758">U4043758</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="trading-symbol">Symbol</label>
                        <select id="trading-symbol" className="form-control" onChange={this.onChangeTradingSymbol}>
                            <option>DAX</option>
                            <option>YM</option>
                            <option>NQ</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="signal-speed">Signal Speed</label>
                        <select id="signal-speed" className="form-control" onChange={this.onChangeSignalSpeed}>
                            <option value="1">Entry</option>
                            <option value="2">Slow</option>
                            <option value="3">Exit</option>
                        </select>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="start-time">Start Time</label>
                        <div id="start-time" className="form-group">
                            <StartDateTimePicker
                                startDateTime={this.state.startDateTime}
                                handleStartDateTime={this.onChangeStartDateTime}
                            />
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <label htmlFor="start-time">End Time</label>
                        <div id="start-time" className="form-group">
                            <EndDateTimePicker
                                endDateTime={this.state.endDateTime}
                                handleEndDateTime={this.onChangeEndDateTime}
                            />
                        </div>
                    </div>
                </div>
               {this.graphLoader()}
            </div>
        )
	}
}

export default Strategies;