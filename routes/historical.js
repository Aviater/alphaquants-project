const router = require('express').Router();
let Historical = require('../models/historical.model');

// List All
router.route('/').get((req, res) => {
	Historical.find()
		.then(historicals => res.json(historicals))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update-historical/5dd14cdbe7179a0b5f6e006a').post((req, res) => {
	Historical.findById('5dd14cdbe7179a0b5f6e006a')
	.then(historical => {
        
		historical.performanceMonthly = req.body.performanceMonthly;

		historical.save()
			.then(() => res.json('Historical data updated!'))
			.catch(err => res.status(400).json('Error ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;