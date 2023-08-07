let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //just pointing at controllers folder will tell index.js to target our endpoints for us

// Base Route http://localhost:8000/api/posts
router.get("/", (req, res) => {
  Controllers.postsController.getPosts(res);
});

http://localhost:8000/api/posts/create
router.post("/create", (req, res) => {
  Controllers.postsController.createPost(req.body, res);
});

http://localhost:8000/api/posts/put:<id#> //double check this with robert
router.put("/:id", (req, res) => {
  Controllers.postsController.updatePost(req, res);
});

http://localhost:8000/api/posts/delete/:id //double check this with robert
router.delete("/:id", (req, res) => {
  Controllers.postsController.deletePost(req, res);
});

//adding in routes for likes and comments
router.put("/:id/like", (req, res) => {
    Controllers.postsController.likePost(req, res);
});

router.post("/:id/comment", (req, res) => {
    Controllers.postsController.commentOnPost(req, res)
})

module.exports = router;
