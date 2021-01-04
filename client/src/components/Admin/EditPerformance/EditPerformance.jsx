import React, { Component } from 'react';
import {updateHistoricalData} from '../../../api/historicals';

class EditPerformance extends Component {

	constructor(props) {
		super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSelectedMonth = this.onChangeSelectedMonth.bind(this);
        this.onChangeSelectedPerformance = this.onChangeSelectedPerformance.bind(this);
        this.addHistoricalPerformance = this.addHistoricalPerformance.bind(this);

		this.state = {
            selectedMonth: '',
            selectedPerformance: '',
            updated: false
		}
    }
    
    addHistoricalPerformance() {
        let historical = this.props.historical;
        let selectedMonth = this.state.selectedMonth;
        let selectedPerformance = parseFloat(this.state.selectedPerformance);

        if(selectedMonth === historical[historical.length - 1].month) {
            let accumulatedThisMonth = (historical[historical.length - 2].accumulated + selectedPerformance).toFixed(2);
            historical[historical.length - 1] = {
                month: selectedMonth,
                performance: selectedPerformance,
                accumulated: parseFloat(accumulatedThisMonth)
            }
        } else {
            let accumulatedThisMonth = (historical[historical.length - 1].accumulated + selectedPerformance).toFixed(2);
            historical.push(
                {
                    month: selectedMonth,
                    performance: selectedPerformance,
                    accumulated: parseFloat(accumulatedThisMonth)
                }
            )
        }

        return historical;
    }
    
    reloadWindow() {
        window.location.reload();
    }

	onChangeSelectedMonth(e) {
		this.setState({
            selectedMonth: e.target.value
        });
	}

	onChangeSelectedPerformance(e) {
		this.setState({
            selectedPerformance: e.target.value
        });

	}

	async onSubmit(e) {
        e.preventDefault();
        
		let historical = {
			performanceMonthly: this.addHistoricalPerformance()
        }
        
        const historicalResponse = await updateHistoricalData(historical);

        if(historicalResponse.status === 200) {
            this.setState({
                updated: true
            });
        } else {
            this.setState({
                updated: 'error'
            });
        }
	}

	render() {
		return (
            <div>
                <h3 className="add-performance">Add New Month and Performance</h3>
                <div className="row">
                    <form className="add-user" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <div className="col-sm-4">
                            <label htmlFor="month-input" className="col-form-label col-form-label-lg performance-form">Set Monthly</label>
                                <select required onChange={this.onChangeSelectedMonth} value={this.state.selectedMonth} name="month-input" className="form-control performance-form">
                                    <option value={''}>Select Month</option>
                                    <option value={"01/" + this.props.thisYear}>Jan</option>
                                    <option value={"02/" + this.props.thisYear}>Feb</option>
                                    <option value={"03/" + this.props.thisYear}>Mar</option>
                                    <option value={"04/" + this.props.thisYear}>Apr</option>
                                    <option value={"05/" + this.props.thisYear}>May</option>
                                    <option value={"06/" + this.props.thisYear}>Jun</option>
                                    <option value={"07/" + this.props.thisYear}>Jul</option>
                                    <option value={"08/" + this.props.thisYear}>Aug</option>
                                    <option value={"09/" + this.props.thisYear}>Sep</option>
                                    <option value={"10/" + this.props.thisYear}>Oct</option>
                                    <option value={"11/" + this.props.thisYear}>Nov</option>
                                    <option value={"12/" + this.props.thisYear}>Dec</option>
                                </select>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="performance-input" className="col-form-label col-form-label-lg performance-form">Set Performance</label>
                                <input required defaultValue={this.state.performance} onChange={this.onChangeSelectedPerformance} name="performance-input" step="0.01" type="number" className="form-control colFormLabelLg performance-form" />
                            </div>
                            <div className="col-sm-4">
                                <input type="submit" value="Save" className="btn btn-info performance-form" />
                                <button type="button" onClick={this.reloadWindow} className="btn btn-danger performance-form">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
		)
	}
}

export default EditPerformance;