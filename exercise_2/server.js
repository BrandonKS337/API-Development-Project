const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const Controllers = require("./controllers"); // Import from index.js
const user = require('./routes/userRoutes');

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "This is the MongoDB application" });
});

app.use("/", userRoutes); // Use userRoutes

// Access controllers from Controllers object
const userController = Controllers.userController;
const postController = Controllers.postController;


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});