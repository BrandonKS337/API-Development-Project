const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.post('/login', (req, res) => {
    // console.log('Request body:', req.query)          //to check for user use this part
    // res.send('Check the username and password')

    console.log(req.body)
    // take the user id from the req.body

    const userId = req.body.userId

    // if (userId.length >0 || userId!== null || user !== underfined) {} //what Javascript is doing 
    //how to actually write this
    if (userId) {  //if userId exists run this block of code
        //check the database for this id
        //if id exists in system, un encrypt password

        //example test, check for correct userId
        if (userId === "alskdhgtla39kshdglakshd") {
            //this means we have the correct user
            
            // ALL THIS DATA SENT BACK AND FORTH IS CALLED A PAYLOAD


            //this part sends success code, and authorization token  
            res.status(200).json({token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"})   //json web token will most likely be a jwt.io
        }
        else {
            res.status(401).json({error: "User not authorized"})
        }
    }


    
})

router.get('/authorized', (req, res) => {
    // res.send('Authorize User')  //removed for much later exampl
    const correctToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    console.log(req.headers)
    const token = req.headers.token;
    
    //this simulates checking for the correct token for private pages on site/app
    if(token === correctToken) {
        res.status(200).json({message: "Looks good to me!"})
    } else {
        res.status(403).json({error: "User not authorized!"})
    }
})

router.post('/createAccount/', (req, res)=>{
    console.log(req.body)
    const email = req.body.email;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    //at this point >>>>
    //send this to the database to be saved //using imaginary code we dont have yet - Robert
    //wait for database to return successful response
    //and get new user ID
    
    const userId = "alskdhgtla39kshdglakshd" //probably technically a UUID universally unique identifier
    //now need to send this to the front end aka client

    res.status(201).json({userId: userId}) //chain the two methods with one response //201 = updated database record


    res.send('Request received!')
  })

module.exports = router      // exports results as a module type... we are only exporting router in this example