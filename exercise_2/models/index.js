// index.js file is going to be used to direct all of the models easily to other files from this single "location".
// expand this section to build on all files needed
'use strict'


module.exports = {
    User: require('./user'),
    Posts: require('./posts')
    
}