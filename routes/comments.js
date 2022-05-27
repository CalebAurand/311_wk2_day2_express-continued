const express = require('express');
const router = express.Router();

//comments data
const commentsData = require("../data/comments");

//define the comments controller
// const commentsController = require('../controllers/comments');

//define the get all route for comments
router.get('/comments', (req, res)=>{
    console.log("GET /comments");
    //return all the comments
    res.json(commentsData);
});

//define the get one route for comments
router.get('/comments/:id', (req, res)=>{
    console.log("GET /comments/:id ", req.params.id);
    //find the contact with matching id
    let found = commentsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});

//define the POST route for comments
router.post('/comments', (req, res)=>{
    console.log("POST /comments")
    //find the length of the array of comments
    //length will act as the new object index
    index = commentsData.length;
    //length plus 1 will act as the new object id
    let ID = index + 1;
    //create new comment object
    let newComment = {};
    let postId = 1
    //set newComment _id = ID
    newComment._id = ID;
    // set newComment name = body name
    newComment.body = req.body.body;
    newComment.postId = postId;
    //append the new comment to the comments array
    commentsData.push(newComment);
    //send newComment object back to client
    res.json(newComment);
});

module.exports = router;
