"use strict";

const Models = require("../models");
const bcrypt = require("bcrypt");

const getUsers = (res) => {
  Models.User.findAll({})
    //finds all users
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};
const getUsersById = (req, res) => {
  Models.User.findAll({
    where: { id: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const getUsersByIdTestPassword = (req, res) => {
  const unhashedPassword = req.body.password;
  Models.User.findAll({
    where: { id: req.params.id },
  })
    .then((data) => {
      if (data && bycrpt.compareSync(unhashedPassword, data.password)) {
        console.log("password correct");
      } else {
        console.log("password not right yo");
      }
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createUsers = async (data, res) => {
  //creates a new user using JSON data POSTed in request body
  const salt = await bcrypt.genSaltSync(10, "a");
  const originalPassword = data.password;
  const hashedPassword = bcrypt.hashSync(data.password, salt);
  data.password = hashedPassword;

  Models.User.create(data)
    .then((data) => {
      data.password = originalPassword;
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    })
}

const createPost = (data, res) => {
  Models.Post.create(data)
    .then((data) => {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const updateUser = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  Models.User.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.destroy({ where: { id: req.params.id } })
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
  getUsersById,
  createPost,
  createUsers,
  updateUser,
  deleteUser,
  getUsersByIdTestPassword,
};
