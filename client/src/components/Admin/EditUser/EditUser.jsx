import React, { Component } from 'react';
import Graph from '../../Dashboard/Graph/GraphWrapper';
import Transactions from '../../Dashboard/Transactions/Transactions';
import Utils from '../../../utils/Utils';
import EditUserController from './EditUser.layer';

class EditUser extends Component {

	editUser;

	constructor(props) {
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeCompany = this.onChangeCompany.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
		this.onChangeBalance = this.onChangeBalance.bind(this);
		this.onChangeEquity = this.onChangeEquity.bind(this);
		this.onChangeDividends = this.onChangeDividends.bind(this);
		this.onChangeTransactionYear = this.onChangeTransactionYear.bind(this);
		this.onChangeTransactionQuarter = this.onChangeTransactionQuarter.bind(this);
		this.onChangeTransactionConcept = this.onChangeTransactionConcept.bind(this);
		this.onChangeTransactionAmount = this.onChangeTransactionAmount.bind(this);
		this.removeTransactionEntry = this.removeTransactionEntry.bind(this);
		this.enableEdit = this.enableEdit.bind(this);

		this.state = {
			readOnly: true,
			text: 'Edit',
			id: '',
			username: '',
			email: '',
			phone: '',
			company: '',
			address: '',
			country: '',
			balance: '',
			equity: '',
			dividends: '',
			transactions: '',
			transactionYear: '',
			transactionQuarter: '',
			transactionAmount: '',
			transactionConcept: '',
			performanceTotal: '',
			performanceLastMonth: '',
			performanceCurrentMonth: '',
			userRelevantMonths: [],
			lastUpdated: '',
			status: ''
		}
	}

	componentDidMount() {
		this.handleUserData();
	}

	async handleUserData() {
		this.editUser = new EditUserController();
		await this.editUser.loadUserData(this.props.match.params.id);
		await this.editUser.loadHistoricalData();
	
		if(this.editUser.getStatus() === 'ok') {
			this.editUser.formatTimestamp();
			const performanceMonthly = this.editUser.getUserPerformance();
			const userData = this.editUser.getUserData();
			const lastUpdated = this.editUser.getLastUpdated();
			
			this.setState({
				users: userData,
				id: userData._id,
				username: userData.username,
				email: userData.email,
				phone: userData.phone,
				company: userData.company,
				address: userData.address,
				country: userData.country,
				balance: userData.balance,
				equity: userData.equity,
				dividends: userData.dividends,
				transactions: userData.transactions,
				transactionYear: Utils.dateAndQuarterSetter().year,
				transactionQuarter: Utils.dateAndQuarterSetter().quarter,
				transactionAmount: userData.balance - userData.equity,
				transactionConcept: 'Dividend',
				performanceTotal: performanceMonthly.reduce(this.editUser.calculateTotalPerformance).performance.toFixed(2),
				performanceLastMonth: performanceMonthly[performanceMonthly.length - 2].performance,
				performanceCurrentMonth: performanceMonthly[performanceMonthly.length - 1].performance,
				userRelevantMonths: {
					graphData: this.editUser.getAcculumatedPerformance(performanceMonthly),
				},
				lastUpdated: lastUpdated.replace(/T/, ' at ').replace(/\..+/, ''),
				status: 'ok'
			});
		} else {
			this.setState({
				status: 'error'
			});
		}
	}

	enableEdit() {
		this.setState(prevState => ({
			readOnly: !prevState.readOnly,
			disabled: !prevState.disabled,
			text: this.state.text == 'Edit' ? 'Cancel' : 'Edit'
		}))
	}

	addToTransactionHistory() {
		if(this.state.transactionAmount != 0) {
			this.state.transactions.unshift({
				date: Utils.dateAndQuarterSetter().date,
				quarter: this.state.transactionQuarter,
				amount: this.state.transactionAmount,
				concept: this.state.transactionConcept
			});
		}
	}

	removeTransactionEntry(e) {
		this.state.transactionAmount = 0;
		document.querySelector('.transaction').value = '0';
		this.state.transactions.shift();
		this.onSubmit(e);
	}

	deleteButton() {
		return <button onClick={this.removeTransactionEntry} className="btn btn-danger deleteEntry"><i className="ti-trash"></i></button>
	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value
		});
	}

	onChangePhone(e) {
		this.setState({
			phone: e.target.value
		});
	}

	onChangeCompany(e) {
		this.setState({
			company: e.target.value
		});
	}

	onChangeAddress(e) {
		this.setState({
			address: e.target.value
		});
	}

	onChangeCountry(e) {
		this.setState({
			country: e.target.value
		});
	}

	onChangeBalance(e) {
		this.setState({
			balance: e.target.value
		});
	}

	onChangeEquity(e) {
		this.setState({
			equity: e.target.value
		});
	}

	onChangeDividends(e) {
		this.setState({
			dividends: e.target.value
		});
	}

	onChangeTransactionYear(e) {
		this.setState({
			transactionYear: e.target.value
		});
	}

	onChangeTransactionQuarter(e) {
		this.setState({
			transactionQuarter: e.target.value
		});
	}

	onChangeTransactionAmount(e) {
		this.setState({
			transactionAmount: e.target.value
		});
	}

	onChangeTransactionConcept(e) {
		this.setState({
			transactionConcept: e.target.value
		});
	}
	

	notifications() {
		if(this.state.updated === 'ok') {
			return 	<div id="alert" className="alert alert-primary" role="alert">
						User updated successfully!
						<button type="button" onClick={() => {Utils.destroyAlert()}} className="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
					</div>
		} else if(this.state.updated === 'error') {
			return 	<div id="alert" className="alert alert-secondarye" role="alert">
						An error has occured...
						<button type="button" onClick={() => {Utils.destroyAlert()}} className="btn-close" data-bs-dismiss="alert" aria-label="Close">x</button>
					</div>
		} else {
			return;
		}
	}

	async onSubmit(e) {
		e.preventDefault();
		this.addToTransactionHistory();

		let user = {
			id: this.state.id,
			username: this.state.username,
			email: this.state.email,
			phone: this.state.phone,
			company: this.state.company,
			address: this.state.address,
			country: this.state.country,
			balance: this.state.balance,
			equity: this.state.equity,
			dividends: this.state.dividends,
			transactions: this.state.transactions
		}

		this.setState({
			updated: await this.editUser.updateUser(this.props.match.params.id, user)
		});

		this.forceUpdate();
	}

  	render() {
	    return (
    		<div className="edit-user-page container">

				<Graph
					graphHeaderData={{
						left: this.state.performanceTotal + '%',
						middle: this.state.performanceLastMonth + '%',
						right: this.state.performanceCurrentMonth + '%'
					}}
					graphText={{left: 'Since Inception', middle: 'Previous Month', right: 'Current Month'}}
					data={this.state.userRelevantMonths}
					xAxis={'month'}
					dataKey={{line: 'accumulated', bar: 'performance'}}
					performanceTotal={this.state.performanceTotal}
					performanceLastMonth={this.state.performanceLastMonth}
					performanceCurrentMonth={this.state.performanceCurrentMonth}
					lastUpdated={this.state.lastUpdated}
				/>

				<Transactions 	transactions={this.state.transactions} 
								button={this.deleteButton()}/>

				<hr/>
				{this.notifications()}
				<form onSubmit={this.onSubmit.bind(this)} className="edit-user-form">
					<div className="form-group row">
						<label htmlFor="username" className="col-sm-2 col-form-label col-form-label-sm">Full Name</label>
						<div className="col-sm-10">
							<input id="username" readOnly={this.state.readOnly} defaultValue={this.state.username} onChange={this.onChangeUsername} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
						<div className="col-sm-10">
							<input id="email" readOnly={this.state.readOnly} defaultValue={this.state.email} onChange={this.onChangeEmail} type="email" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="phone" className="col-sm-2 col-form-label col-form-label-lg">Phone</label>
						<div className="col-sm-10">
							<input id="phone" readOnly={this.state.readOnly} defaultValue={this.state.phone} onChange={this.onChangePhone} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="company" className="col-sm-2 col-form-label col-form-label-sm">Company</label>
						<div className="col-sm-10">
							<input id="company" readOnly={this.state.readOnly} defaultValue={this.state.company} onChange={this.onChangeCompany} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
						<div className="col-sm-10">
							<input id="address" readOnly={this.state.readOnly} defaultValue={this.state.address} onChange={this.onChangeAddress} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="country" className="col-sm-2 col-form-label col-form-label-lg">Country</label>
						<div className="col-sm-10">
							<input id="country" readOnly={this.state.readOnly} defaultValue={this.state.country} onChange={this.onChangeCountry} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="balance" className="col-sm-2 col-form-label col-form-label-sm">Balance</label>
						<div className="col-sm-10">
							<input id="balance" readOnly={this.state.readOnly} defaultValue={this.state.balance} onChange={this.onChangeBalance} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="equity" className="col-sm-2 col-form-label">Equity</label>
						<div className="col-sm-10">
							<input id="equity" readOnly={this.state.readOnly} defaultValue={this.state.equity} onChange={this.onChangeEquity} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="dividends" className="col-sm-2 col-form-label">Dividends</label>
						<div className="col-sm-10">
							<input id="dividends" readOnly={this.state.readOnly} defaultValue={this.state.dividends} onChange={this.onChangeDividends} type="text" className="form-control colFormLabelLg" />
						</div>
					</div>
					<hr/>
					<div className="form-group row">
						<label htmlFor="transactions" className="col-sm-2 col-form-label">Create Transaction</label>
						<div className="col-sm-2">
							<select required readOnly={this.state.readOnly} className="form-control performance-form" onChange={this.onChangeTransactionQuarter}>
								<option value={Utils.dateAndQuarterSetter().quarter}>{Utils.dateAndQuarterSetter().quarter}</option>
								<option></option>
								<option value="Q1">Q1</option>
								<option value="Q2">Q2</option>
								<option value="Q3">Q3</option>
								<option value="Q4">Q4</option>
							</select>
						</div>
						<div className="col-sm-2">
							<input placeholder="Amount to transfer to dividends wallet..." readOnly={this.state.readOnly} defaultValue={this.state.transactionAmount} onChange={this.onChangeTransactionAmount} type="number" className="form-control colFormLabelLg transaction" />
						</div>
						<div className="col-sm-6">
							<input placeholder="Transaction concept..." readOnly={this.state.readOnly} defaultValue="Dividend" onChange={this.onChangeTransactionConcept} type="text" className="form-control colFormLabelLg transaction" />
						</div>
					</div>
					<div className="alert alert-warning text-center" role="alert">
						Always double check pre-populated values!
					</div>
					<div className="btn-group">
						<button type="button" onClick={this.enableEdit} className="btn btn-primary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="You can now edit information.">{this.state.text}</button>
						<input className="btn btn-success" type="submit" value="Submit" />
						<a href="/admin" className="btn btn-warning">To Admin</a>
					</div>
				</form>
			</div>
	    )
  	}
}

export default EditUser;