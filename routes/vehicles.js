const express = require('express');
//define the router variable to use express Router
const router = express.Router();

//vehicle data
const vehicleData = require("../data/vehicles");

//define the vehicles controller
// const vehiclesController = require('../controllers/vehicles');

//define the get all route for vehicles
router.get('/vehicles', (req, res)=>{
    console.log("GET /vehicles");
    //return all the vehicles
    res.json(vehicleData);
});

//define the get one route for vehicles
router.get('/vehicles/:id', (req, res)=>{
    console.log("GET /vehicles/:id ", req.params.id);
    //find the contact with matching id
    let found = vehicleData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});

//define the POST route for vehicles
router.post('/vehicles', (req, res)=>{
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
});

module.exports = router;