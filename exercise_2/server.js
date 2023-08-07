const express = require("express")
const app = express()
require("dotenv").config()
let dbConnect = require("./dbConnect")

const userRoutes = require('./routes/userRoutes.js') //pull the route into app
const postRoutes = require('./routes/postRoutes.js')

// parse requests of content-type - application / json;
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome the basic blog app." });
});


app.use('/api/users', userRoutes) //directs traffic for the userRoutes
app.use('/api/posts', postRoutes) //directs traffic for postRoutes

// set port, listen for requests doing the two || means or and if default port in .env isn't available then it defaults to this number instead
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

