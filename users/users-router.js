const express = require("express");

const Users = require("../data/helpers/userDb.js");

const router = express.Router();

function uppercase(req, res, next) {
  req.body.name =
    req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
  // This is to capitalize first letter - I initially had req.body.name.toUpperCase() if that's actually what the README wanted... Slightly unclear
  next();
}

router.get("/", async (req, res) => {
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

router.post("/", uppercase, async (req, res) => {
  if (!req.body.name) {
    res.status();
  }
  try {
    const user = await Users.insert(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding the user."
    });
  }
});

router.put("/:id", uppercase, async (req, res) => {
  try {
    const user = await Users.update(req.params.id, req.body);
    if (user) {
      res.status(200).json({
        message: "The user was updated successfully",
        numUsersUpdated: user
      });
    } else {
      res.status(404).json({ message: "The user could not be found." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error updating the user."
    });
  }
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await Users.remove(req.params.id);
    if (user > 0) {
      res
        .status(200)
        .json({ message: "The user has been deleted.", numUsersDeleted: user });
    } else {
      res.status(404).json({ message: "The user could not be found." });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error deleting the user."
    });
  }
});

module.exports = router;
