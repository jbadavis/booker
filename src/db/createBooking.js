const db = require(".");

const createBooking = (userId, dateTime) =>
  db.query(
    `INSERT INTO bookings(
      user_id, 
      date_time, 
      created_at
    ) values($1, $2, CURRENT_TIMESTAMP)`,
    [userId, dateTime]
  );

module.exports = createBooking;
