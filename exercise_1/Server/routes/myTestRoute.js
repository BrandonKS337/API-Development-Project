const express = require('express');
const router = express.Router ()    //pulling out function from express package

router.get ('/test', (req, res) => {
    res.send('Hello World!')
})

router.get('/test2', (req, res) => {
    res.send('Second test')
})

module.exports = router      // exports results as a module type... we are only exporting router in this example