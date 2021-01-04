const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
	},
	email: {
		type: String,
	},
	phone: {
		type: String,
	},
	company: {
		type: String
	},
	address: {
		type: String
	},
	country: {
		type: String
	},
	balance: {
		type: String
	},
	equity: {
		type: String
	},
	dividends: {
		type: String
	},
	transactions: {
		type: Array
	}
}, {
	timestamps: true
});

const User = mongoose.model('user', userSchema);

module.exports = User;