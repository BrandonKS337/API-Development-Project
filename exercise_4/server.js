//named server to keep readability

const express = require("express"); // imports express from express package
const app = express(); //tells app to use express
require("dotenv").config(); 
const PORT = process.env.PORT || 8080; //defines port info from .env file 

const boredApiRoutes = require('./routes/boredApiRoute') //importing router from boredApiRoutes.js

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server Is up and running" }); //set up .get to test if server is running. on status 200 it will push msg into html on localhost:8000 || 8080 if 8k is busy
});

//using route created/defining endpoints further
//http://localhost:8000/api/bored
app.use('/api/bored', boredApiRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
