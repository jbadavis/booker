const express = require("express");
const createBooking = require("../../db/createBooking");
const getBookings = require("../../db/getBookings");
const deleteBooking = require("../../db/deleteBooking");

const bookings = () => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const { rows } = await getBookings();

    res.json(rows);
  });

  router.post("/", async (req, res) => {
    const {
      body: { dateTime, userId },
    } = req;

    try {
      const { rows } = await createBooking(userId, dateTime);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - could not create booking");

      res.sendStatus(400);
    }
  });

  router.delete("/:bookingId", async (req, res) => {
    const { rows } = await deleteBooking(req.params.bookingId);

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
