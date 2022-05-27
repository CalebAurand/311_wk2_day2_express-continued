// Move the appropriate "data" from the router files to the controller files
//* Ex. move `const comments = require("../data/comments")` into the controller 
//  file so it has access to the array

//define the contact data to be accessed
const contactData = require("../data/contacts");

// We will make three functions in each file: "list", "show" and "create"
const list = (req, res)=>{
    console.log("GET /contacts");
    //return all the contacts
    res.json(contactData);
};

const show = (req, res)=>{
    console.log("GET /contacts/:id ", req.params.id);
    //find the contact with matching id
    let found = contactData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
};

const create = (req, res)=>{
    console.log("POST /contacts")
    //find the length of the array of contacts
    //length will act as the new object index
    index = contactData.length;
    //length plus 1 will act as the new object id
    let ID = index + 1;
    //create new contact object
    let newContact = {};
    //set newContact _id = ID
    newContact._id = ID;
    // set NewContact name = body name
    newContact.name = req.body.name;
    newContact.occupation = req.body.occupation;
    //append the new contact to the contacts array
    contactData.push(newContact);
    //send newContact object back to client
    res.json(newContact);
};

// * Export the functions at the end like:
// *  `module.exports = { list, show, create }`
// * Import and use the controller functions in the appropriate router
// * Ex. `app.get('/comments', commentController.list)`

module.exports = {list, show, create};