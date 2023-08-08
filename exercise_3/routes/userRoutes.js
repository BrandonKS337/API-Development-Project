const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


//http://localhost:8000/api/users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

//http://localhost:8000/api/users/<:id>
router.get("/:id", (req, res) => {
    Controllers.userController.getUsersById(req, res);
  });

  //http://localhost:8000/api/users/createUser
router.post("/createUser", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

//http://localhost:8000/api/users/createPost
router.post("/createPost", (req, res) => {
  Controllers.userController.createPost(req.body, res);
});

//http://localhost:8000/api/users/:<id>
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

//http://localhost:8000/api/users/:<id>
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});


//used as a test route during class session not needed for functionality. Just keeping as a reference
// router.post("/testPassword/:id", (req, res) => {
//   Controllers.userController.getUsersByIdTestPassword(req, res)
// })

module.exports = router;
