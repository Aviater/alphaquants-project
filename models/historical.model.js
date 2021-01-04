const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historicalSchema = new Schema({
	performanceMonthly: {
		type: Array
	}
}, {
	timestamps: true
});

const Historical = mongoose.model('historical', historicalSchema);

module.exports = Historical;