import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import User from './User';
import Dashboard from './Dashboard';

class DashboardController extends Component {

	constructor(props) {
		super(props);

		this.state = {
			id: '',
			username: '',
			phone: '',
			company: '',
			address: '',
			country: '',
			performanceTotal: '',
			performanceLastMonth: '',
			performanceCurrentMonth: '',
			balance: '',
			equity: '',
			email: '',
			dividends: '',
			transactions: '',
			userRelevantMonths: [],
			lastUpdated: ''
		}
	}

	componentDidMount() {
		this.handleUserData();
	}

	async handleUserData() {
		const tokenEmail = User.getTokenEmail();
		const user = new User(tokenEmail);

		await user.loadUserData();
		await user.loadHistoricalData();
		user.formatTimestamp();
		const performanceMonthly = user.getUserPerformance();
		const userData = user.getUserData();
		const lastUpdated = user.getLastUpdated();

		this.setState({
			id: userData._id,
			username: userData.username,
			email: tokenEmail,
			phone: userData.phone,
			company: userData.company,
			address: userData.address,
			country: userData.country,
			performanceTotal: performanceMonthly.reduce(user.calculateTotalPerformance).performance.toFixed(2),
			performanceLastMonth: performanceMonthly[performanceMonthly.length - 2].performance,
			performanceCurrentMonth: performanceMonthly[performanceMonthly.length - 1].performance,
			balance: Utils.numberWithCommas(userData.balance),
			equity: Utils.numberWithCommas(userData.equity),
			dividends: Utils.numberWithCommas(userData.dividends),
			transactions: userData.transactions,
			userRelevantMonths: {
				graphData: user.getAcculumatedPerformance(performanceMonthly),
			},
			lastUpdated: lastUpdated.replace(/T/, ' at ').replace(/\..+/, ''),
		})
	}

	render() {
		return (
			<Dashboard 
				id={this.state.id}
				username={this.state.username}
				phone={this.state.phone}
				company={this.state.company}
				address={this.state.address}
				country={this.state.country}
				performanceTotal={this.state.performanceTotal}
				performanceLastMonth={this.state.performanceLastMonth}
				performanceCurrentMonth={this.state.performanceCurrentMonth}
				balance={this.state.balance}
				equity={this.state.equity}
				email={this.state.email}
				dividends={this.state.dividends}
				transactions={this.state.transactions}
				userRelevantMonths={this.state.userRelevantMonths}
				lastUpdated={this.state.lastUpdated}
			/>
		)
	}
}

export default DashboardController;