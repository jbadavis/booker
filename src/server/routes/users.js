const express = require("express");
const createUser = require("../../db/createUser");

const users = () => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      await createUser(req.body.email);

      res.sendStatus(200);
    } catch (err) {
      console.log("db error - user already exists");

      res.sendStatus(403);
    }
  });

  return router;
};

module.exports = users;
