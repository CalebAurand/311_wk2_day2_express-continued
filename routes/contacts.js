const express = require('express');
//define the router variable to use express Router
const router = express.Router();


//define the contacts controller
const contactsController = require('../controllers/contacts');
const contacts = require('../data/contacts');

//define the get all route for contacts
router.get('/contacts', contactsController.list);

//define the get one route for contacts
router.get('/contacts/:id', contactsController.show);

//define the POST route for contacts
router.post('/contacts', contactsController.create);

module.exports = router;

