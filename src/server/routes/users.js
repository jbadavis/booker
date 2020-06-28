const express = require("express");
const createUser = require("../../db/createUser");
const getUsers = require("../../db/getUsers");

const users = () => {
  const router = express.Router();

  router.get("/", async (req, res) => {
    const { rows } = await getUsers();

    res.json(rows);
  });

  router.post("/", async (req, res) => {
    try {
      const { rows } = await createUser(req.body.email);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - user already exists");

      res.sendStatus(400);
    }
  });

  return router;
};

module.exports = users;
