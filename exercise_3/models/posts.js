/* const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  //defining our keys
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  content: { type: String, trim: true, required: true },
  likes: { type: Number, default: 0},
  comments: [{text: String, createdAt: Date}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);*/