const router = require('express').Router();
let User = require('../models/user.model');

// Fetch by email.
router.route('/').post((req, res) => {
	User.find({email: req.body.email})
		.then(users => {
			res.json(users);
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

// Fetch all.
router.route('/all').get((req, res) => {
	if(req.headers.authorization === 'admin-fetch') {
		User.find()
			.then(user => {
				res.send(user);
			})
			.catch(err => res.status(400).json('Error: ' + err));
	} else {
		res.json({'Error': 'Not authorized.'})
	}
	
})

// Fetch by id.
router.route('/user/:id').get((req, res) => {
	User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Create
router.route('/add').post((req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const phone = req.body.phone;
	const company = req.body.company;
	const address = req.body.address;
	const country = req.body.country;
	const balance = req.body.balance;
	const equity = req.body.equity;
	const dividends = req.body.dividends;
	const transactions = req.body.transactions;

	const newUser = new User({
		username,
		email,
		phone,
		company,
		address,
		country,
		balance,
		equity,
		dividends,
		transactions
	});

	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Update
router.route('/update/:id').post((req, res) => {
	User.findById(req.params.id)
	.then(user => {
		user.username = req.body.username;
		user.email = req.body.email;
		user.phone = req.body.phone;
		user.company = req.body.company;
		user.address = req.body.address;
		user.country = req.body.country;
		user.balance = req.body.balance;
		user.equity = req.body.equity;
		user.dividends = req.body.dividends;
		user.transactions = req.body.transactions;

		user.save()
			.then(() => {res.json('User Updated!')})
			.catch(err => res.status(400).json('Error ' + err));
	})
	.catch(err => res.status(400).json('Error: ' + err));
});

// Delete
router.route('/:id').delete((req, res) => {
	User.findByIdAndDelete(req.params.id)
	.then(() => res.json('User deleted!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;