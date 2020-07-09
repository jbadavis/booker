const express = require("express");
const db = require("../../db/bookings");

const bookings = () => {
  const router = express.Router();

  router.get("/:bookingId?", async (req, res) => {
    const { rows } = req.params.bookingId
      ? await db.getBooking(req.params.bookingId)
      : await db.getBookings();

    res.json(rows);
  });

  router.get("/user/:userId", async (req, res) => {
    const { rows } = await db.getBookingsByUser(req.params.userId);

    res.json(rows);
  });

  router.post("/", async (req, res) => {
    const {
      body: { dateTime, userId },
    } = req;

    try {
      const { rows } = await db.createBooking(userId, dateTime);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - could not create booking");

      res.sendStatus(400);
    }
  });

  router.delete("/:bookingId", async (req, res) => {
    const { rows } = await db.deleteBooking(req.params.bookingId);

    if (rows.length !== 0) {
      res.json(rows[0]);
    } else {
      console.log("db error - could not delete booking");

      res.sendStatus(400);
    }
  });

  return router;
};

module.exports = bookings;
