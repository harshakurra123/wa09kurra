var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  x = Math.floor(Math.random() * Math.floor(5));
  console.log(req.query.x)
  if (req.query.x)
    x = req.query.x;
  res.send(`Math.ceil applied to ${x} is ${Math.ceil(x)}`)
});

module.exports = router;
