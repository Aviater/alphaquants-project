import React from 'react';
import Utils from '../../utils/Utils';
import {fetchAllUsers, addUser} from '../../api/users';
import {fetchHistoricalData} from '../../api/historicals';
import Row from './Row';

export default class UserList {

    users;
    size;
    historical;
    status = 'error';

    async loadUserData() {
		const userResponse = await fetchAllUsers();
		const historicalResponse = await fetchHistoricalData();

		if(userResponse.status === 200 && historicalResponse.status === 200)  {
            this.users = userResponse.data,
            this.size = userResponse.data.length,
            this.historical = historicalResponse.data[0].performanceMonthly,
            this.status = 'ok'
		}
    }

    getUsers() {
        return this.users;
    }
    
    getSize() {
        return this.size;
    }

    getHistorical() {
        return this.historical;
    }

    getStatus() {
        return this.status;
    }
    
    async addUser(user) {
        const updateUserResponse = await addUser(user);

        if(updateUserResponse.status === 200) {
            return 'ok';
        } else {
            return 'error';
        }
    }

    async generateUserList() {
		if(this.size > 0) {
			return this.users.map(user => {
				return 	<Row key={user._id}
							id={user._id}
							username={user.username}
							email={user.email}
							phone={user.phone}
							company={user.company}
							address={user.address}
							country={user.country}
							balance={Utils.numberWithCommas(user.balance)}
							equity={Utils.numberWithCommas(user.equity)}
							dividends={Utils.numberWithCommas(user.dividends)}
						/>
			})
		} else {
			return <tr><td>No users in database</td></tr>
		}	
    }
    
    // Remove alert element.
    destroyAlert() {
        const element = document.querySelector('#alert');
        if(element) {
            element.parentNode.removeChild(element);
        }
    }
    
}