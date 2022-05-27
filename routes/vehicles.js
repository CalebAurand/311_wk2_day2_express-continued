const express = require('express');
//define the router variable to use express Router
const router = express.Router();

//define the vehicles controller
const vehiclesController = require('../controllers/vehicles');

//define the get all route for vehicles
router.get('/vehicles', vehiclesController.list);

//define the get one route for vehicles
router.get('/vehicles/:id', vehiclesController.show);

//define the POST route for vehicles
router.post('/vehicles', vehiclesController.create);

module.exports = router;