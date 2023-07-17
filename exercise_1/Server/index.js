const express = require("express"); //tells app we need this package
const app = express(); //sets express to variable called app aka extracts functions from package

const swaggerUi = require("swagger-ui-express"); //imports the package      //this is the package
const swaggerDocument = require("./swagger.json"); //points to swagger.json file  //this is the settings for that package ask about this.



app.use(
  "/api-docs",   // this creates the new endpoint "/api-docs" //aka the target to aim for when routing through 
  swaggerUi.serve, // this uses the method from the package
  swaggerUi.setup(swaggerDocument) //passes in swagger.json to "setup" method.
);

const port = 3000; //3000 popular for development work
const testRoute = require("./routes/myTestRoute.js");
const feedRoute = require("./routes/feeds.js");
const calculatorRoute = require("./routes/calculatorRoute.js");
const authRoute = require("./routes/auth.js")


const ports = [3001, 3002, 3003]; //adding additional ports to server
const servers = [];

ports.forEach(() => {
  //for.Each loops over ports array
  let app = express(); //instantiate new express app
  servers.push(app); //pushing to servers array
});

// for(i = 0, i <ports.length; i++;) {             //reason for loop is to dynamically create more instances off express app
//     let app = express()
//     servers.push(app)
// }

//use route "/" aka https://home.com
//https://home.com/account
//app.get is a bind for an endpoint // aka bind a get endpoint to obj app using the /url(root)
//when called this funct passes 2 args req and res//calls to res.send sending message in brackets to requestor

/*  commenting app.get out for the purpose of changing up server routing

// app.get('/', (req, res) => {           // runs variable.get  / (route) response response then pushes 
//     res.send('Hello World!')
// })


// app.get('/test', (req, res) => {
//     res.send('this is a test!')
// })

*/
app.use(express.json());

app.use("/", express.static("public"));
app.use("/mytest", testRoute);
app.use("/loggedin", feedRoute);
app.use("/calculator", calculatorRoute);
app.use("/auth", authRoute)

//continually listen on this port for traffic, send to routes defined above
app.listen(port, () => {
  //one way to access ports array listed above is to change "port" to ports[0]
  console.log(`Example app listening at http://localhost:${port}`);
});

servers.forEach((server) => {
  //ports check mapping over ports array and then popping out last item in array.
  let tempPort = ports.pop();

  // server.use("/", (req,res) => {              //changed from express.static('public') to req,res like in app.get above to have server show results for multiple por
  //     res.send(`Hello from ${tempPort}`)
  // })
  server.use("/", express.static("public"));
  server.listen(tempPort, () => {
    console.log(`Example app listening at http://localhost:${tempPort}`);
  });
});
// purpose was to create a server
