var express = require('express');
var router = express.Router();
const path = require('path');
/* GET full news json */
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/..', '/news.json'));
});

module.exports = router;