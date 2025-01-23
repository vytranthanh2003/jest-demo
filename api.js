const axios = require('axios');

async function fetchUser(userId) {
    if (!userId) throw new Error("User ID is required");
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
}

async function fetchData() {
    return "Hello Jest"; // Giả lập dữ liệu
}

module.exports = { fetchUser, fetchData };