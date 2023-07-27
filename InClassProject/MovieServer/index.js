const express = require('express')
const cors = require('cors') //included to fix multihosting source issues
const app = express()
require("dotenv").config() // added for module 9
let dbConnect = require("./dbConnect.js") //pulled in for module 9. 
const userRoutes = require('./routes/userRoutes.js')


// const port = 3000  //default port for base movie server app. Removed for Module 9 


const moviesRoute = require('./routes/moviesRoute')

app.use(cors())
app.use(express.json()) //added to parse json data

app.get('/', (req, res) => {
    res.send('Hello World!')
})



//endpoint = localhost:3000/api/movies
app.use('/api', moviesRoute)
app.use("/api/users", userRoutes)

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

const PORT = process.env.Port || 8080;  // double verticals || means "or"
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})