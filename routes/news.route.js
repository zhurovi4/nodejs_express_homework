const express = require('express');
const router = express.Router();

// Require the controllers
const news_controller = require('../controllers/news.controller');


// test
router.get('/test', news_controller.test);
module.exports = router;

router.get('/all', news_controller.posts_all);

router.post('/create', news_controller.post_create);

router.get('/:id', news_controller.post_details);

router.put('/:id/update', news_controller.post_update);

router.delete('/:id/delete', news_controller.post_delete);