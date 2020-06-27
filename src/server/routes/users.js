const express = require("express");
const createUser = require("../../db/createUser");

const users = () => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const { rows } = await createUser(req.body.email);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - user already exists");

      res.sendStatus(403);
    }
  });

  return router;
};

module.exports = users;
