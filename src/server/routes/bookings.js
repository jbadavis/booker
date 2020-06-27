const express = require("express");
const createBooking = require("../../db/createBooking");

const bookings = () => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const {
      body: { dateTime, userId },
    } = req;

    try {
      await createBooking(userId, dateTime);

      res.sendStatus(200);
    } catch (err) {
      console.log("db error - could not create booking", err);

      res.sendStatus(403);
    }
  });

  return router;
};

module.exports = bookings;
