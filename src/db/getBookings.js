const db = require(".");

const getBookings = () => db.query("SELECT * FROM bookings");

module.exports = getBookings;
