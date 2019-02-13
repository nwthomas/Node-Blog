const express = require("express");

const Posts = require("../data/helpers/postDb.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.get(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the posts."
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const posts = await Posts.getById(req.params.id);
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ message: "No posts were found." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error retrieving the posts."
    });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.text || !req.body.user_id) {
    res.status(); // Finish
  }
  try {
    const post = await Posts.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding the post."
    });
  }
});

module.exports = router;
