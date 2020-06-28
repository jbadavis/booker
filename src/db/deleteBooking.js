const db = require(".");

const deleteBooking = (bookingId) =>
  db.query(`DELETE FROM bookings WHERE booking_id = $1 RETURNING *`, [
    bookingId,
  ]);

module.exports = deleteBooking;
