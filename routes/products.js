const express = require('express');
//define the router variable to use express Router
const router = express.Router();


//define the products controller
const productsController = require('../controllers/products');

//define the get all route for products
router.get('/products', productsController.list);

//define the get one route for products
router.get('/products/:id', productsController.show);

//define the POST route for products
router.post('/products', productsController.create);

module.exports = router;