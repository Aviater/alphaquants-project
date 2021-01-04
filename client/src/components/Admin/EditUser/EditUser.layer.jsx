import moment from 'moment';
import Utils from '../../../utils/Utils';
import {fetchSingleUser, updateUser} from '../../../api/users';
import {fetchHistoricalData} from '../../../api/historicals';

export default class EditUserController {

    userData;
    historicalData;
    lastUpdated;
    statusUser = 'error';
    statusHistorical = 'error';

    constructor(email) {
        this.email = email;
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

    getStatus() {
        if(this.statusUser === 'ok' && this.statusHistorical === 'ok') {
            return 'ok';
        } else {
            return 'false';
        }
    }

    async updateUser(id, user) {
        const updateUserResponse = await updateUser(id, user);

        if(updateUserResponse.status === 200) {
            return 'ok';
        } else {
            return 'error';
        }
    }
   
    async loadUserData(id) {
        // Retrieve specific user by ID
        const userData = await fetchSingleUser(id);
        if(userData.status === 200) {
            this.userData = userData.data;
            this.statusUser = 'ok';
        }
    }   

    async loadHistoricalData() {
        // Retrieve historical data
        const historicalData = await fetchHistoricalData();
        if(historicalData.status === 200) {
            this.historicalData = historicalData.data[0].performanceMonthly;
            this.lastUpdated = historicalData.data[0].updatedAt;
            this.statusHistorical = 'ok';
        }
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

		// For representing the month of user creation.
			relevantMonths.push({
				month: previousInitialMonth,
				performance: 0,
				accumulated: 0
			});
		// }

		return relevantMonths.reverse();
    }

    // Calculate the accumulated perfomance for the graph
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