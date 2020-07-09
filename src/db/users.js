const db = require(".");

const createUser = (email) =>
  db.query("INSERT INTO users(email) values($1) RETURNING *", [email]);

const getUser = (userId) =>
  db.query(`SELECT * FROM users WHERE user_id = $1`, [userId]);

const getUsers = () => db.query("SELECT * FROM users");

module.exports = {
  createUser,
  getUser,
  getUsers,
};
