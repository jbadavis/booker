const db = require(".");

const getUsers = () => db.query("SELECT * FROM users");

module.exports = getUsers;
