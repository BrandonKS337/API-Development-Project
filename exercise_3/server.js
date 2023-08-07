const express = require("express")
const app = express()

require("dotenv").config()

let dbConnect = require("./dbConnect")


// parse requests of content-type - application / json;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome the basic blog app. This one however will include the use of sequelize"});
});

// set port, listen for requests doing the two || means or and if default port in .env isn't available then it defaults to this number instead
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

