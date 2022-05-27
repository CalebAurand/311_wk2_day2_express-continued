// Move the appropriate "data" from the router files to the controller files
//* Ex. move `const comments = require("../data/comments")` into the controller 
//  file so it has access to the array

//define the contact data to be accessed
const contactData = require("../data/contacts");

// We will make three functions in each file: "list", "show" and "create"

// * Export the functions at the end like:
// *  `module.exports = { list, show, create }`
// * Import and use the controller functions in the appropriate router
// * Ex. `app.get('/comments', commentController.list)`

module.exports = {list, show, create};