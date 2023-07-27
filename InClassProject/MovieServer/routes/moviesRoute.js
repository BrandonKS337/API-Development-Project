const express = require('express')
const router = express.Router()

const moviesController = require("../controllers/moviesController")

router.get('/movies', (req, res) => {
    moviesController.getMovies(req, res)
})

router.post('/addMovie', (req, res) => {
    moviesController.addMovie(req, res)
})

module.exports = router