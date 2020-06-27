const { Pool } = require("pg");

const app = async () => {
  const pool = new Pool();
  const res = await pool.query("SELECT NOW()");

  console.log("Hey", res);

  await pool.end();
};

module.exports = app;
