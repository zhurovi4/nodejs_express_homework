const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Homework', message: 'Time to learn Node.js' });
});

module.exports = router;