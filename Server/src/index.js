const PORT=3001;
const server=require('./app.js');
const {conn}=require("./DB_connection");
//const express=require('express') 
//const server= express()


server.listen(PORT, async () => {
  await conn.sync({ force: true }),
  console.log("Server raised in port: " + PORT);
});



//server.use((req, res, next) => {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Credentials", "true");
//  res.header(
//    "Access-Control-Allow-Headers",
//    "Origin, X-Requested-With, Content-Type, Accept"
//  );
//  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//  next();
//});
//server.use(express.json()); // midd
////server.use(morgan('dev'))  // midd
////localhost:3001//rickandmorty/postFav
//server.use("/rickandmorty", router);