const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.get ('/feed', (req, res) => {
    console.log(req.query)
    res.send('List the users main feed')
})

router.post('/test/:id', (req, res)=>{
    console.log(req.params)
    console.log(req.body)
    const token = req.headers.authorization
    if(token){ //if token exists, execute the next block of code
      console.log("Token exists!")
      //check the database if token is valid
      //if token is valid, allow entry to server
      //else{
      //   res.status(400)
      //   res.json({error: "token invalid"})
      // }
    }
    res.send('List the users main feed')
  })

router.get('/group', (req, res) => {
    res.send('This points to a group')
})

module.exports = router      // exports results as a module type... we are only exporting router in this example