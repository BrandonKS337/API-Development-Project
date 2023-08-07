"use strict";

const User = require("./user"); //require the model

const Post = require("./post") //loads the post model

async function init() {
  await User.sync(); 
  await Post.sync();  //syncs the model
};


init();

module.exports = {
  User, //export the user model
  Post, //exports the post model
};
