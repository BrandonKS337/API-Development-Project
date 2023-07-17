const express = require("express");
const router = express.Router(); //pulling out function from express package

const calculatorController = require('../controller/calculatorController')

///route created for exponent/"power" as test and practice for library portion of mod 5 ex 5 //////
router.get('/expo', (req, res) => {
    calculatorController.expoNums(req, res)
})


router.get('/add', (req, res) => {
    calculatorController.addNumbers(req, res)
})

router.get('/sub', (req, res) => {
    calculatorController.subNumbers(req, res)
})

router.get('/div', (req, res) => {
    calculatorController.divNumbers(req, res)
})

router.get('/prod', (req, res) => {
    calculatorController.prodNumbers(req, res)
})

module.exports = router;


// router.get("/add", (req, res) => {
//   /// 4444 NOTES by Robert: 4444 need a total of 4, ex changing /add to  /subtract so so forth
//   console.log(req.query);
//   let num1 = parseInt(req.query.num1); //change our query number into an integer
//   let num2 = parseInt(req.query.num2);

//   let sum = num1 + num2;
//   console.log("Sum", sum);   // res.send('Add')
//   res.status(200).json({ result: sum }); //included to show server result A-ok
// });

// module.exports = router; // exports results as a module type... we are only exporting router in this example

// /// 3333 NOTES by Robert: notes on routes 33333: have source just need to change it around to create new routes.
// /// NOTES by Robert:actually just need to copy and paste then change it... robert 5/17 7:26PM.. to correct operator
