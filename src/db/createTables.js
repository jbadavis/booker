const createTables = async (pool) => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY, email VARCHAR (200) not null)"
  );
};

module.exports = createTables;
