const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require('../src/routes/index.js');

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json()); // midd
server.use(morgan("dev")); // midd

//localhost:3001//rickandmorty/postFav
server.use("/rickandmorty",router);

module.exports = server;
