const Database = require("../libraries/dataBaseLib")

const db = new Database()

//create function controller to get all movies
const getMovies = (req, res) => {
    const data = db.movies()
    res.status(200).json({ result: data})
}

const addMovie = (req, res) => {
    const data = req.body
    console.log('Add movie', req.body)
    if (data.title && data.synopsis && data.image) {
        const result = db.addMovie(data)
        res.status(201).json({ result: "Movie added!", databaseLength: result})
    } else {
        console.log("Error! Invalid post data!")
        res.status(400).json({ error: "Incorrect post data!"})
    }
}

module.exports = {getMovies, addMovie}