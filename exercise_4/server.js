//named server to keep readability

const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "Server Is up and running"}) //set up .get to test if server is running. on status 200 it will push msg into html on localhost:8000 || 8080 if 8k is busy
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})