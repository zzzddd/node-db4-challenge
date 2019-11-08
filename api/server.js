const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const tasksRouter = require("./routes/recipirouter");

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.use("/api/recipi", tasksRouter);

server.get("/", (req, res) => {
  res.send("SERVER IS RUNNINGGGGGGGGG");
});

module.exports = server;
