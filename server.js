const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const usersRouter = require("./users/users-router.js");
const postsRouter = require("./posts/posts-router.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/api/users", usersRouter);
server.use("/api/posts", postsRouter);

server.get("/", async (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.headers.name}, to the Lambda Hubs API</p>
    `);
});

module.exports = server;
