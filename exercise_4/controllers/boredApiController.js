//first thing was to copy in the example routes from bored api documentation that was provided.

//GET requests
//GET http://www.boredapi.com/api/activity

//GET http://www.boredapi.com/api/activity?participants=:<# of participants>

const getActivity = (res) => {
  fetch("http://www.boredapi.com/api/activity")
    // .then((response) => {
    //   //put something here in order to use the response from get request
    //   //   console.log(response.json())
    //   return response.json(); // changed this to a return instead of console log because console.log doesn't actually return anything.
    //   //even though it returns data into terminal need to do something with that response. aka we have data and need to respond (res). Taking care of this in next .then statement
    // })
    //changing the above code to a shorthand version
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
      //   res.status(200).json({ data: data }); //this will wrap data in a data key and is redundant code.
    })
    .catch((err) => {
      console.log("Unable to fetch: ", err); //this is basically the else portion of if else statement. If it does't return data correctly then log an error for debugging purposes.
    });
};

//GET http://www.boredapi.com/api/activity?participants=:<# of participants>
const getParticipants = (req, res) => {
  console.log(req.params.participants);
  if (req.params.participants > 5 && req.params.participants < 8) { //this if/else is responding errors for values 6 and 7
    res.status(400).json({ error: "You have too many friends." });
    console.log("bad participant value");
  } else { //without this it would run the rest of code. if conditions are met where participant value is 1-5 or 8 the rest of code runs
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
  console.log(req.body.activityType);
  const activityType = req.body.activityType.toLowerCase(); //pushing as toLowerCase() so that it matches api data

  fetch(`http://www.boredapi.com/api/activity?type=${activityType}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log("Unable to fetch", err);
    });
};

module.exports = {
  getActivity,
  getParticipants,
  getType,
};
