const db = require(".");

const createUser = (email) =>
  db.query("INSERT INTO users(email) values($1) RETURNING *", [email]);

module.exports = createUser;
