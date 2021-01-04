import axios from 'axios';
import connection from '../utils/connection';

// Fetch historical trade data from database
const fetchHistoricalData = () => {
    const historicalData = axios.get(`${connection.host()}/historical/`)
        .then(response => {
            return response;
        })
        .catch((err) => {
            console.log('Error fetching historical data: ' + err);
        });
    
    return historicalData;
}

// Update historical trade data
const updateHistoricalData = (historical) => {
    const historicalData = axios.post(`${connection.host()}/historical/update-historical/5dd14cdbe7179a0b5f6e006a`, historical)
            .then(response => {
                return response;
            })
            .catch((err) => {
                console.log('Error updating historical data: ', err);
            });

    return historicalData;
}

export {fetchHistoricalData, updateHistoricalData};