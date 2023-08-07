const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost:8080/api/posts
router.get("/", (req, res) => {
    Controllers.postController.getPosts(res);
  });

  // http://localhost:8080/api/posts/createPost
router.post("/createPost", (req, res) => {
    Controllers.postController.createPost(req.body, res);
  });

  // http://localhost:8080/api/posts/updatePost/:id
router.put("/updatePost/:id", (req, res) => {
    Controllers.postController.updatePost(req, res);
  });

  module.exports = router;