// async.js
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Jest");
        }, 1000);
    });
};

module.exports = { fetchData };
