const express = require('express');
const router = express.Router();


//define the comments controller
const commentsController = require('../controllers/comments');

//define the get all route for comments
router.get('/comments', commentsController.list);

//define the get one route for comments
router.get('/comments/:id', commentsController.show);

//define the POST route for comments
router.post('/comments', commentsController.create);

module.exports = router;
