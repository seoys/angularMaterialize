var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
console.log("abcde");
  res.render('index');
});

module.exports = router;
