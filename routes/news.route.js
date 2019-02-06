const express = require('express');
const router = express.Router();

// Require the controllers
const news_controller = require('../controllers/news.controller');

module.exports = router;

router.get('/', news_controller.posts_all);

router.post('/', news_controller.post_create);

router.get('/:id', news_controller.post_details);

router.put('/:id', news_controller.post_update);

router.delete('/:id', news_controller.post_delete);