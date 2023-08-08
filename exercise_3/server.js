const express = require('express');
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my MySQL Application." });
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});