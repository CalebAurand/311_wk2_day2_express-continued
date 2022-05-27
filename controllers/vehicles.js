// Move the appropriate "data" from the router files to the controller files
//* Ex. move `const comments = require("../data/comments")` into the controller 
//  file so it has access to the array

//define the contact data to be accessed
const vehicleData = require("../data/vehicles");

// We will make three functions in each file: "list", "show" and "create"
const list = (req, res)=>{
    console.log("GET /vehicles");
    //return all the vehicles
    res.json(vehicleData);
};

const show = (req, res)=>{
    console.log("GET /vehicles/:id ", req.params.id);
    //find the contact with matching id
    let found = vehicleData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
};

const create = (req, res)=>{
    console.log("POST /vehicles")
    //find the length of the array of contacts
    //length will act as the new object index
    index = vehicleData.length;
    //length plus 1 will act as the new object id
    let ID = index + 1;
    //create new contact object
    let newVehicle = {};
    //set newContact _id = ID
    newVehicle._id = ID;
    // set NewContact name = body name
    newVehicle.year = req.body.year;
    newVehicle.make = req.body.make;
    newVehicle.model = req.body.model;
    //append the new contact to the contacts array
    vehicleData.push(newVehicle);
    //send newContact object back to client
    res.json(newVehicle);
};

// * Export the functions at the end like:
// *  `module.exports = { list, show, create }`
// * Import and use the controller functions in the appropriate router
// * Ex. `app.get('/comments', commentController.list)`

module.exports = {list, show, create};