const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {type: String, required: true},
  content: String,
  author: String
}, {collection: 'post-data'})

var PostData = mongoose.model('PostData', postSchema)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Homework', message: 'Time to learn Node.js' });
});

router.get('/get-news', function(req, res, next) {
  PostData.find()
      .then(function(posts) {
        res.render('index', {items: posts});
      });
});

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new PostData(item);
  data.save();

  res.redirect('/');
});

module.exports = router;