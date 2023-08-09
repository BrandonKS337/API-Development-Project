Exercise 4

Choose a third-party microservice (see the list of free JSON APIs) and connect it to your
current express application (or a new one) with its own routes, controller and model, to
add new functionality to your application.
Try to include support for either or both types of request parameters:
● via the query - eg. GET http://localhost:8080/api/users?page=1
● via the params - eg. PUT http://localhost:8080/api/users/1234

https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0


//for sake of time I am building a new express app in order to complete this exercise

//note: for request params it is more secure to do req.body vs doing req.params

To use:
use npm i and then run with npm run server

to test.
GET http://www.boredapi.com/api/activity?participants=<put # of participants>
//pulls a random activity based on your participants count
ex: http://localhost:8000/api/bored/participants/1 <change#. avoid 6 and 7 due to api not hosting those options>


GET http://www.boredapi.com/api/activity
//pulls a random activity
ex: http://localhost:8000/api/bored/activity //pull random option