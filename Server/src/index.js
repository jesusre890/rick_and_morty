const express=require("express");
const morgan=require('morgan')
const router = require('./routes/index.js')
const server = express();
const PORT=3001;

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
server.use(express.json()) // midd
server.use(morgan('dev'))  // midd

//localhost:3001//rickandmorty/postFav
server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

//const http = require("http");
//const getCharById = require("./controllers/getCharById");
//const PORT = 3001;

//http
//  .createServer((req, res) => {
//    res.setHeader("Access-Control-Allow-Origin", "*");

//    if (req.url.includes("/rickandmorty/character")) {
//      const id = req.url.split("/").pop(); //string
//      getCharById(res, id);
//    }
//  })
//  .listen(PORT, "localhost");
