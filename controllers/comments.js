// Move the appropriate "data" from the router files to the controller files
//* Ex. move `const comments = require("../data/comments")` into the controller 
//  file so it has access to the array

//define the contact data to be accessed
const commentsData = require("../data/comments");

// We will make three functions in each file: "list", "show" and "create"

const list = (req, res)=>{
    console.log("GET /comments");
    //return all the comments
    res.json(commentsData);
};

const show = (req, res)=>{
    console.log("GET /comments/:id ", req.params.id);
    //find the contact with matching id
    let found = commentsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
}

const create = (req, res)=>{
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
};

// * Export the functions at the end like:
// *  `module.exports = { list, show, create }`
// * Import and use the controller functions in the appropriate router
// * Ex. `app.get('/comments', commentController.list)`

module.exports = {list, show, create};