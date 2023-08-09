const express = require("express");
const router = express.Router(); //takes in a route using express
const boredApiController = require("../controllers/boredApiController"); //imports controller

router.get("/activity", (req, res) => {
  console.log("GET", req.url); //req.url shows which endpoint we are pointing to
  boredApiController.getActivity(res);
});

router.get("/participants/:participants", (req, res) => {
  console.log("GET", req.url);
  boredApiController.getParticipants(req, res);
});

router.get("/activityType", (req, res) => {
  console.log("GET", req.url);
  boredApiController.getType(req, res);
});

module.exports = router;
