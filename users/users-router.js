const express = require("express");

const Users = require("../data/seeds/02-users.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find(req.query);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the users."
    });
  }
});

module.exports = router;
