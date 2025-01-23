const axios = require('axios');
const { fetchUser, fetchData } = require('./api');

jest.mock('axios'); // Mock axios

describe('API Tests', () => {
    test('Fetch user by ID', async () => {
        const mockData = { id: 1, name: 'John Doe' };
        axios.get.mockResolvedValue({ data: mockData });

        const user = await fetchUser(1);
        expect(user).toEqual(mockData);
    });

    test('Fetch user throws error for missing ID', async () => {
        await expect(fetchUser()).rejects.toThrow("User ID is required");
    });

    test('fetches data asynchronously', async () => {
        const data = await fetchData();
        expect(data).toBe('Hello Jest');
    });

    test('fetches data resolves correctly', () => {
        return expect(fetchData()).resolves.toBe('Hello Jest');
    });
});