const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

const users = new mongoose.Schema({
  _id: Number,
  user_name: String,
  user_email: String,
  user_password: String,
  //can insert additional fields here later. keeping simple for now
})

// Function to get all users
const getUsers = (res) => {
  User.find({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
// Function to create a new user
const createUsers = (data, res) => {
  user.create(data)
    .then(function (data) {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
// Function to update a user
const updateUsers = (req, res) => {
  user.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers
}