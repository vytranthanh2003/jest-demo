function filterActiveUsers(users) {
    if (!Array.isArray(users)) throw new Error("Invalid data format");
    return users.filter(user => user.active);
}

module.exports = filterActiveUsers;