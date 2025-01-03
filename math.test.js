const { add } = require('./math'); // Import hàm cần test từ file math.js

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
