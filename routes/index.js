const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostData = require('../models/news.model');
mongoose.connect('mongodb://zhurovi4:zhura1982@ds223015.mlab.com:23015/vzhurovich', () => {
  console.log('Connected to DB!');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Homework', message: 'Time to learn Node.js' });
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