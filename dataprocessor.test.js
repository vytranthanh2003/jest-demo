const filterActiveUsers = require('./dataprocessor');

describe('Data Processor', () => {
    test('Filter active users', () => {
        const users = [
            { id: 1, name: 'Vỹ', active: true },
            { id: 2, name: 'Tuấn', active: false },
            { id: 3, name: 'Trí', active: true }
        ];
        const result = filterActiveUsers(users);
        expect(result).toEqual([
            { id: 1, name: 'Vỹ', active: true },
            { id: 3, name: 'Trí', active: true }
        ]);
    });

    test('Throw error for invalid input', () => {
        expect(() => filterActiveUsers(null)).toThrow("Invalid data format");
    });
});