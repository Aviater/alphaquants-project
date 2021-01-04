module.exports = {
	host: () => {
		switch(window.location.hostname) {
			case 'localhost':
				return 'http://localhost:5000';
			case 'https://alpha-staging.herokuapp.com':
				return 'https://alpha-staging.herokuapp.com';
			case 'https://dashboard.alphaquants.io':
				return 'https://dashboard.alphaquants.io';
		}
	},
	backtest: 'https://api.alphaquants.fund/trendrisk/backtest/results',
	strategy: 'https://api.alphaquants.fund'
}