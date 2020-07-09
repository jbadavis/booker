const express = require("express");
const db = require("../../db/users");

const users = () => {
  const router = express.Router();

  router.get("/:userId?", async (req, res) => {
    const { rows } = req.params.userId
      ? await db.getUser(req.params.userId)
      : await db.getUsers();

    res.json(rows);
  });

  router.post("/", async (req, res) => {
    try {
      const { rows } = await db.createUser(req.body.email);

      res.json(rows[0]);
    } catch (err) {
      console.log("db error - user already exists");

      res.sendStatus(400);
    }
  });

  return router;
};

module.exports = users;
