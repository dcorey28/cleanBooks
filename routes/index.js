var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('index.html');
});

router.get('/find', function(req, res, next) {
	res.sendfile('find.html');
});

router.get('/books/:name', function (req, res, next) {
	res.render('book', {book: req.params.name});
});

module.exports = router;
