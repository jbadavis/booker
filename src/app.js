const { Pool } = require("pg");
const createTables = require("./db/createTables");

const app = async () => {
  const pool = new Pool();

  createTables(pool);

  await pool.end();
};

module.exports = app;
