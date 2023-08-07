"use strict";

const User = require("./user"); //require the model
const Posts = require("./post")

async function init() {
  await User.sync(); //sync the model
  await Posts.sync()
};

init();

module.exports = {
  User, //export the model
};
