var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let iconSet = ["🧨","🎡","🧨",];
  let chooseIcon = iconSet[Math.random()]
  res.render('index', { title: 'DWPII-2023A' });
});

module.exports = router;
