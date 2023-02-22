var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet=["🍷","🎡","🍕",];
  let icon = iconSet[Math.floor(Math.random()*3)];
  res.render('index', { title: 'DWPII-2023A', icon });
});

router.get('/author', (req, res)=>{
  //Creating a View-Model

  let author = {
    "name": "Jose Ezequiel",
    "lastname": "Hernandez ",
    "age": "22 years"
  };
// Sending yhe view-model to be renderd by a View

res.render('Author',author);

})

module.exports = router;
