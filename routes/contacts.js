const express = require('express');
//define the router variable to use express Router
const router = express.Router();

//define the contact data to be accessed
const contactData = require("../data/contacts");

//define the contacts controller
// const contactsController = require('../controllers/contacts');

//define the get all route for contacts
router.get('/contacts', (req, res)=>{
    console.log("GET /contacts");
    //return all the contacts
    res.json(contactData);
});

//define the get one route for contacts
router.get('/contacts/:id', (req, res)=>{
    console.log("GET /contacts/:id ", req.params.id);
    //find the contact with matching id
    let found = contactData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});

//define the POST route for contacts
router.post('/contacts', (req, res)=>{
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
});

module.exports = router;

