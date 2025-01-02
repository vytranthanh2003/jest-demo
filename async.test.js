const { fetchData } = require('./async');

test('fetches data asynchronously', async () => {
    const data = await fetchData();
    expect(data).toBe('Hello Jest');
});

test('fetches data resolves correctly', () => {
    return expect(fetchData()).resolves.toBe('Hello Jest');
});
