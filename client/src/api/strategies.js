import axios from 'axios';
import connection from '../utils/connection';

const fetchStrategyData = async (tradingServer, tradingId, tradingSymbol, signalSpeed, startDateTime, endDateTime) => {
    const strategyData = await axios.get(`${connection.strategy}/${tradingServer}/trendrisk/chart/${tradingId}/${tradingSymbol}/${signalSpeed}/${startDateTime}/${endDateTime}`)
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log('Unable to fetch strategy api data:', err);
        });

    return strategyData;
}

export {fetchStrategyData};