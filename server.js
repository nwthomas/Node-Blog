const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.get("/", async (req, res, next) => {
  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome ${req.headers.name}, to the Lambda Hubs API</p>
    `);
});

module.exports = server;
