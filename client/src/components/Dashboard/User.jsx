import moment from 'moment';
import Utils from '../../utils/Utils';
import {fetchUserByEmail} from '../../api/users';
import {fetchHistoricalData} from '../../api/historicals';

export default class User {

    userData;
    historicalData;
    lastUpdated;

    constructor(email) {
        this.email = email;
    }
   
    static getTokenEmail() {
        // Get Okta ID token
		const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        const tokenEmail = idToken.idToken.claims.email.toLowerCase();
        
        return tokenEmail;
    }

    async loadUserData() {
        // Retrieve specific user
        const payload = {
            email: this.email
        };
        const userResponse = await fetchUserByEmail(payload);

        if(userResponse) {
            this.userData = userResponse.data[0];
        } else {
            console.log('Something went wrong with the user fetch request.');
        }
        
    }

    async loadHistoricalData() {
        // Retrieve historical data
        const historicalResponse = await fetchHistoricalData();
        this.historicalData = historicalResponse.data[0].performanceMonthly;
        this.lastUpdated = historicalResponse.data[0].updatedAt;
    }

    getUserData() {
        return this.userData;
    }

    getHistoricalData() {
        return this.historicalData;
    }

    getLastUpdated() {
        return this.lastUpdated;
    }

    getUserEmail() {
        return this.email;
    }

    formatTimestamp() {
        this.userData.createdAt.slice(0, 7);
        Utils.transformDate(this.userData.createdAt);
    }

    calculateTotalPerformance(a, b) {
        return {performance: a.performance + b.performance};
    }

    // Calculate the user performance for the graph.
    getUserPerformance() {
        this.userData.createdAt = Utils.transformDate(this.userData.createdAt);
		let relevantMonths = [];
		let i = this.historicalData.length - 1;
		let previousInitialMonth = moment(this.userData.createdAt).subtract(1, 'months').format('MM/YYYY');

		relevantMonths.push(this.historicalData[i]);
		
		while(this.historicalData[i].month != this.userData.createdAt) {
			i--;
			relevantMonths.push(this.historicalData[i]);
		}

		// For representing the month of user creation
			relevantMonths.push({
				month: previousInitialMonth,
				performance: 0,
				accumulated: 0
			});
		// }

		return relevantMonths.reverse();
    }

    // Calculate the accumulated perfomance for the graph.
    getAcculumatedPerformance(performanceMonthly) {
		let initialValue = 0;
		let index = 0;

		performanceMonthly.reduce(function (accumulator, currentValue) {
			performanceMonthly[index].accumulated = Math.round((accumulator + currentValue.performance)*100)/100;
			index++;
			return (accumulator + currentValue.performance);
		}, initialValue)

		return performanceMonthly;
	}

}