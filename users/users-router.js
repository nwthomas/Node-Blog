const express = require("express");

const Users = require("../data/helpers/userDb.js");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req);
  try {
    const users = await Users.get(req.query);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the users."
    });
  }
});

router.get("/:id", async (req, res) => {
  console.log(req);
  try {
    const user = await Users.getById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the hub."
    });
  }
});

module.exports = router;
