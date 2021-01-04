import axios from 'axios';
import connection from '../utils/connection';

const fetchBackTestsList = () => {
    const backTestListData = axios.get(connection.backtest)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log('Unable to fetch back-test list api data:', err);
        });

    return backTestListData;
}

const fetchBackTest = async (backTest) => {
    const backTestData = await axios.get(`${connection.backtest}/${backTest}`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log('Unable to fetch back-test api data:', err);
        });

    return backTestData;
}

export {fetchBackTestsList, fetchBackTest};