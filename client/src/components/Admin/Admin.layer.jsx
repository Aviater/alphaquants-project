import React, { Component } from 'react';
import Utils from '../../utils/Utils';
import UserList from './UserList';
import Admin from './Admin';

class AdminController extends Component {

	userList;

	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeCompany = this.onChangeCompany.bind(this);
		this.onChangeAddress = this.onChangeAddress.bind(this);
		this.onChangeCountry = this.onChangeCountry.bind(this);
		this.onChangeEquity = this.onChangeEquity.bind(this);

		this.state = {
			users: [],
			historical: [],
			status: '',
			updated: '',
			username: '',
			email: '',
			phone: '',
			company: '',
			address: '', 
			country: '',
			equity: '',
			loaded: ''
		}
	}

	componentDidMount() {
		this.handleUserData();
	}

	async handleUserData() {
		this.userList = new UserList();
		await this.userList.loadUserData();

		this.setState({
			users: this.userList.getUsers(),
			size: this.userList.getSize(),
			historical: this.userList.getHistorical(),
			status: this.userList.getStatus()
		});

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

	onChangeEquity(e) {
		this.setState({
			equity: e.target.value
		});
	}

	async onSubmit(e) {
		e.preventDefault();
		let user = {
			id: this.state.id,
			username: this.state.username,
			email: this.state.email,
			phone: this.state.phone,
			company: this.state.company,
			address: this.state.address,
			country: this.state.country,
			balance: this.state.equity,
			equity: this.state.equity,
			dividends: "0",
			transactions: [
				{
					date: Utils.dateAndQuarterSetter().date,
					quarter: Utils.dateAndQuarterSetter().quarter,
					amount: this.state.equity,
					concept: 'Share purchase'
				}

			]
		}

		this.setState({
			updated: this.userList.addUser(user)
		});

		this.forceUpdate();

	}

	render() {
		return (
			<Admin
				handleChangeUsername={(e) => {this.onChangeUsername(e)}}
				handleChangeEmail={(e) => {this.onChangeEmail(e)}}
				handleChangePhone={(e) => {this.onChangePhone(e)}}
				handleChangeCompany={(e) => {this.onChangeCompany(e)}}
				handleChangeAddress={(e) => {this.onChangeAddress(e)}}
				handleChangeCountry={(e) => {this.onChangeCountry(e)}}
				handleChangeEquity={(e) => {this.onChangeEquity(e)}}
				handleSubmit={(e) => {this.onSubmit(e)}}
				historical={this.state.historical}
				users={this.state.users}
				updated={this.state.updated}
			/>
		)
	}
}

export default AdminController;
