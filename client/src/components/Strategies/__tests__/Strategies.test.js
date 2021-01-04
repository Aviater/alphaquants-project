const strategiesApi = require('../../../api/strategies');
const moment = require('moment')

test('Strategies data is returned.', async () => {
    const strategyFilters = {
        tradingServer: 'trading01',
        tradingId: 'U3090334',
        tradingSymbol: 'DAX',
        signalSpeed: '1',
        startDateTime: moment().add(-7, 'days').format('YYYY-MM-DDTHH:mm:ss'),
        endDateTime: moment().format('YYYY-MM-DDTHH:mm:ss')
    }
    // API response.
    let res = await strategiesApi.fetchStrategyData(strategyFilters.tradingServer, 
                                                    strategyFilters.tradingId, 
                                                    strategyFilters.tradingSymbol, 
                                                    strategyFilters.signalSpeed, 
                                                    strategyFilters.startDateTime, 
                                                    strategyFilters.endDateTime);

    // Expect data to be returned.
    expect(res.data.length !== 0);

});