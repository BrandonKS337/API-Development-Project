"use strict";

const Models = require("../models");

const getPosts = (res) => {
    Models.Post.findAll({})
      .then(function (data) {
        res.send({ result: 200, data: data });
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


  //research how to increment likes... This queries the database for
  //the posts and then returns the data from the req.params.id
  const updatePost = (req, res) => {
    Models.Post.update(req.body, { where: { id: req.params.id } })
      .then(function (data) {
        Models.Post.findAll({where: {id: req.params.id}})
        .then (function(data) {
            res.status(201).json(data);
        })
        .catch((err) => {
            console.log("Error: ", err);
            throw err;
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
        throw err;
      });
  };

  module.exports = {
    getPosts,
    createPost,
    updatePost,
  }
  
