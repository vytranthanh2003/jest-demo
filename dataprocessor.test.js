const filterActiveUsers = require('./dataprocessor');

describe('Data Processor', () => {
    test('Filter active users', () => {
        const users = [
            { id: 1, name: 'Alice', active: true },
            { id: 2, name: 'Bob', active: false },
            { id: 3, name: 'Charlie', active: true }
        ];
        const result = filterActiveUsers(users);
        expect(result).toEqual([
            { id: 1, name: 'Alice', active: true },
            { id: 3, name: 'Charlie', active: true }
        ]);
    });

    test('Throw error for invalid input', () => {
        expect(() => filterActiveUsers(null)).toThrow("Invalid data format");
    });
});