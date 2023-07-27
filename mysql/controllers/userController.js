"use strict";

const Models = require("../models");

const getUsers = (res) => {
  Models.User.findAll({})
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
        where: { id: req.params.id }
    })
      .then(function (data) {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  };

const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};

const createPost = (data, res) => {
  Models.Post.create(data)
    .then(function (data) {
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
};


const updateUser = (req, res) => {
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
};
