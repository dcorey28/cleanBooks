var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('index.html');
});

router.get('/books/:name', function (req, res, next) {
	res.send('You are looking for the book' + req.params.name);
});

module.exports = router;
