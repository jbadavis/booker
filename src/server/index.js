const express = require("express");
const bodyParser = require("body-parser");

const bookings = require("./routes/bookings");
const users = require("./routes/users");

const server = () => {
  const app = express();

  app.use(bodyParser.json());

  app.use("/bookings", bookings());
  app.use("/users", users());

  app.listen(3000);
};

module.exports = server;
