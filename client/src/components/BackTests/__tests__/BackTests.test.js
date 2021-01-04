const backTestApi = require('../../../api/backTests');

let backtest;

test('BackTest list data is returned.', async () => {
    // API response.
    let res = await backTestApi.fetchBackTestsList();
    backtest = res.data[0];

    // Expect data to be returned.
    expect(res.data.length !== 0);

    // API response.
    res = await backTestApi.fetchBackTest(backtest);

    // Expect data to be returned.
    expect(res.data.length !== 0);
});