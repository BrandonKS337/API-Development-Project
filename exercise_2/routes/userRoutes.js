const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//including the routes so can test in postman as recommended in some of the recent classes.

// http://localhost:8080/api/users/
router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

// http://localhost:8080/api/users/:id
router.get("/:id", (req, res) => {
    Controllers.userController.getUsersById(req, res);
  });

// http://localhost:8080/api/users/createUser
router.post("/createUser", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

// http://localhost:8080/api/users/:id
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// http://localhost:8080/api/users/delete/:id
router.delete("/delete/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
