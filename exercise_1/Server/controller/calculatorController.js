const Calculator = require("../libraries/calculator.js"); //typed out
const myCalc = new Calculator();

const testlib = require("../libraries/test.js"); //typed out
const mytestCalc = new testlib();

const expoNums = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1)
  let num2 = parseInt(req.query.num2);


  let sum = mytestCalc.expo(num1, num2)
  console.log("expo", sum)
  res.status(200).json({result: sum})
}


const addNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1); //change our query number into an integer
  let num2 = parseInt(req.query.num2);

  //   let sum = num1 + num2;  //REMOVED DURING CLASS TO DO LIBRARY STUFF
  let sum = myCalc.add(num1, num2);
  console.log("Sum", sum); // res.send('Add')
  res.status(200).json({ result: sum }); //included to show server result A-ok
};

//adding second route to accommodate for subtraction
const subNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1); //change our query number into an integer
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.sub(num1, num2);
  console.log("Sum", sum); // res.send('Sub')
  res.status(200).json({ result: sum }); //included to show server result A-ok
};

//adding second route to accommodate for division
const divNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1); //change our query number into an integer
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.div(num1, num2);
  console.log("Sum", sum); // res.send('Div')
  res.status(200).json({ result: sum }); //included to show server result A-ok
};

//adding second route to accommodate for division
const prodNumbers = (req, res) => {
  console.log(req.query);
  let num1 = parseInt(req.query.num1); //change our query number into an integer
  let num2 = parseInt(req.query.num2);

  let sum = myCalc.prod(num1, num2);
  console.log("Sum", sum); // res.send('Prod')
  res.status(200).json({ result: sum }); //included to show server result A-ok
};

const testFunction = () => {
  myCalc.test();
};

module.exports = {
  addNumbers,
  subNumbers,
  divNumbers,
  prodNumbers, 
  testFunction,
  expoNums
};
