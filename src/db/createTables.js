const { Pool } = require("pg");

const createTables = async () => {
  const pool = new Pool();

  await pool.query(
    `CREATE TABLE IF NOT EXISTS users(
      email VARCHAR (200) UNIQUE NOT NULL,
      user_id SERIAL PRIMARY KEY
    )`
  );

  await pool.query(
    `CREATE TABLE IF NOT EXISTS bookings(
      booking_id SERIAL PRIMARY KEY, 
      created_at TIMESTAMP,
      date_time TIMESTAMP NOT NULL,
      user_id SERIAL REFERENCES users(user_id)
    )`
  );

  await pool.end();
};

module.exports = createTables;
