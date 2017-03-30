var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/bookDB");

var bookSchema = mongoose.Schema({
	title: String,
	author: String,
	cover: String,
	description: String,
	rating: {
		violence: Number,
		substance: Number,
		language: Number,
		sexual: Number
	}
});

var book = mongoose.model('book', bookSchema);

var db = mongoose.connection;

db.on('error', console.error.bind(console, "connection error: "));
db.once('open', function() {
	console.log("Connected to DB");
});
db.dropDatabase();
router.post('/book', function(req, res, next) {
	var newBook = new book(req.body);
	newBook.save(function(err, post) {
		if (err) return console.error(err);
		res.sendStatus(200);
	});
});

router.get('/allBooks', function(req, res, next) {
	book.find(function(err, bookList) {
		if (err) return console.error(err);
		else {
			res.json(bookList);
		}
	});
});

router.get('/book:title', function(req, res, next) {
	book.findOne({ title: req.params.title }, function(err, data) {
		if (err) return console.error(err);
		else {
			res.json(data);
		}
	});
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('index.html');
});

router.get('/bookRating/:name', function (req, res, next) {
	book.findOne({ title: req.params.name }, function(err, data) {
		if (err) return console.error(err);
		else {
			res.render('book', {book: data});
		}
	});
});

module.exports = router;
