const db = require(".");

const createBooking = (userId, dateTime) =>
  db.query(
    `INSERT INTO bookings(
      user_id, 
      date_time, 
      created_at
    ) values(
      $1, 
      $2, 
      CURRENT_TIMESTAMP
    ) RETURNING *`,
    [userId, dateTime]
  );

const deleteBooking = (bookingId) =>
  db.query(`DELETE FROM bookings WHERE booking_id = $1 RETURNING *`, [
    bookingId,
  ]);

const getBooking = (bookingId) =>
  db.query(`SELECT * FROM bookings WHERE booking_id = $1`, [bookingId]);

const getBookings = () => db.query("SELECT * FROM bookings");

module.exports = {
  createBooking,
  deleteBooking,
  getBooking,
  getBookings,
};
