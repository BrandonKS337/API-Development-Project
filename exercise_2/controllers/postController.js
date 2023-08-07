const mongoose = require("mongoose")

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

const PostSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  content: String,
  //can insert additional fields here later. keeping simple for now
})

// Define your Post model using the schema
const Post = mongoose.model("Post", PostSchema);

// Function to get all posts
const getPosts = (res) => {
  Post.find({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
// Function to create a new post
const createPost = (data, res) => {
  Post.create(data)
    .then(function (data) {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
// Function to update a post
const updatePost = (req, res) => {
  Post.findByIdAndUpdate(
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
  getPosts,
  createPost,
  updatePost
}