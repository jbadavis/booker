const express = require("express");
const createBooking = require("../../db/createBooking");

const bookings = () => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const {
      body: { dateTime, userId },
    } = req;

    try {
      const { rows } = await createBooking(userId, dateTime);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - could not create booking");

      res.sendStatus(403);
    }
  });

  return router;
};

module.exports = bookings;
