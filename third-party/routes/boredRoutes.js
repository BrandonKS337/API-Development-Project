const express = require("express");
const router = express.Router(); //takes in a route using express
const boredController = require("../controllers/boredController"); //imports controller

router.get("/activity", (req, res) => {
  console.log("GET", req.url); //req.url shows which endpoint we are pointing to
  boredController.getActivity(res);
});

router.get("/participants/:participants", (req, res) => {
  console.log("GET", req.url);
  boredController.getParticipants(req, res);
});

router.get("/activityType", (req, res) => {
  console.log("GET", req.url);
  boredController.getType(req, res);
});

module.exports = router;
