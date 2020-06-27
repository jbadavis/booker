const { Pool } = require("pg");

const createTables = async () => {
  const pool = new Pool();

  await pool.query(
    "CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY, email VARCHAR (200) UNIQUE NOT NULL)"
  );

  await pool.query(
    "CREATE TABLE IF NOT EXISTS bookings(booking_id SERIAL PRIMARY KEY, data_time TIMESTAMP NOT NULL, user_id SERIAL NOT NULL)"
  );

  await pool.end();
};

module.exports = createTables;
