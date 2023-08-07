const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/userController");

//including the routes so can test in postman as recommended in some of the recent classes.

// http://localhost:8080/api/users/
router.get("/", (req, res) => {
  
  return Controllers.userController.getUsers(res)
});

// // http://localhost:8080/api/users/:id
router.get("/:id", (req, res) => {
  return Controllers.userController.getUsersById(req, res);
  });

// http://localhost:8080/api/users/createUser
router.post("/create", (req, res) => {
  return Controllers.userController.createUser(req.body, res);
});

// // http://localhost:8080/api/users/:id
router.put("/:id", (req, res) => {
  return Controllers.userController.updateUser(req, res);
});

// // http://localhost:8080/api/users/delete/:id
router.delete("/delete/:id", (req, res) => {
  return Controllers.userController.deleteUser(req, res);
});

module.exports = router;
