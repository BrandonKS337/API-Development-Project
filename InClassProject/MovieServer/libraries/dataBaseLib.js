const moviesData = require("../data/moviesData");
const movies = moviesData.movies;

class Database {
  constructor() {
    this.id = Date.now();
  }

  #log = (value) => {
    console.log(`[Database: ${this.id}]: ${value}`);
  };

  //returns posts by id
  movies() {
    this.#log("all");
    return movies;
  }


  //create an add posts route. step 1 working backwards
  addMovie(data) {
    this.#log(data.title)
    const newId = `${movies.length + 1}`
    const newMovie = {
      id: newId,
      ...data
    }

    movies.push(newMovie)
    return movies.length
  }
}

module.exports = Database;
