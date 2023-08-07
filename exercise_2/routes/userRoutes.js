let express = require('express')
let router = express.Router()
let Controllers = require('../controllers') //just pointing at controllers folder will tell index.js to target our endpoints for us

router.get("/", (req, res) => {
    Controllers.userController.getUsers(res);
  });
  
  router.post("/create", (req, res) => {
    Controllers.userController.createUser(req.body, res);
  });
  
  router.put("/:id", (req, res) => {
    Controllers.userController.updateUser(req, res);
  });
  
  router.delete("/:id", (req, res) => {
    Controllers.userController.deleteUser(req, res);
  });
  
  module.exports = router;