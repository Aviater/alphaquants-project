const userApi = require('../../../api/users');

test('User data is returned.', async () => {
    // API response.
    const res = await userApi.fetchUserData();

    // Expect data to be returned.
    expect(res.data.length !== 0);
});

test('Historical data is returned.', async () => {
    // API response.
    const res = await userApi.fetchHistoricalData();

    // Expect data to be returned.
    expect(res.data.length !== 0);
});