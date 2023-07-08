//http://www.boredapi.com/api/activity/

const { response } = require("express");

const getActivity = (res) => {
  fetch("http://www.boredapi.com/api/activity/")
    .then((response) => {
      //do something with response
      return response.json();
    })
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Unable to fetch: ", err);
    });
};

//Get http://www.boredapi.com/api/activity?particpants=1
const getParticipants = (req, res) => {
  console.log(req.params.participants);
  if (req.params.participants > 5 && req.params.participants < 8) {
    res.status(400).json({ error: "You have too many friends." });
    console.log("bad participant value");
  } else {
    fetch(
      `http://www.boredapi.com/api/activity?participants=${req.params.participants}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log("Unable to fetch: ", err);
      });
  }
};

const getType = (req, res) => {
  console.log(req.body.activityType)
  const activityType = req.body.activityType.toLowerCase()

  fetch(`http://www.boredapi.com/api/activity?type=${activityType}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    res.status(200).json(data)
  })
  .catch((err) => {
    console.log("Unable to fetch", err)
  })
}

module.exports = {
  getActivity,
  getParticipants,
  getType
};
