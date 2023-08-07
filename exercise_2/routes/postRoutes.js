let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // Import controllers, aka just pointing at controllers folder will tell index.js to target our endpoints for us


// Base Route http://localhost:8000/api/posts
router.get("/", (req, res) => {
  Controllers.postsController.getPosts(res);
});

// Create a new post
router.post("/create", (req, res) => {
  Controllers.postsController.createPost(req.body, res);
});

// Update a post by ID
router.put("/:id", (req, res) => {
  Controllers.postsController.updatePost(req, res);
});

// Delete a post by ID
router.delete("/:id", (req, res) => {
  Controllers.postsController.deletePost(req, res);
});

// Like a post by ID
router.put("/:id/like", (req, res) => {
  Controllers.postsController.likePost(req, res);
});

// Comment on a post by ID
router.post("/:id/comment", (req, res) => {
  Controllers.postsController.commentOnPost(req, res);
});

module.exports = router;
