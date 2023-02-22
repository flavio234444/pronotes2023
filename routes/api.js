//importing Express Library
var express = require('express');
//creating a Router Instance
var router = express.Router();

//Creating the route
router.get('/author', (req, res)=>{ 
    //Responding to the client using res object
    res.json({
        "name": "Jose Ezequiel",
        "lasname": "Hernandez ",
        "age": "22 years"
    });
});//function(req, res)

//Exporting the router

module.exports = router;
