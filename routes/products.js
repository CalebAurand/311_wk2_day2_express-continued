const express = require('express');
//define the router variable to use express Router
const router = express.Router();

//define the products data
const productsData = require('../data/products');

//define the products controller
// const productsController = require('../controllers/products');

//define the get all route for products
router.get('/products', (req, res)=>{
    console.log("GET /products");
    //return all the products
    res.json(productsData);
});

//define the get one route for products
router.get('/products/:id', (req, res)=>{
    console.log("GET /products/:id ", req.params.id);
    //find the contact with matching id
    let found = productsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});

//define the POST route for products
router.post('/products', (req, res)=>{
    console.log("POST /products")
    //find the length of the array of products
    //length will act as the new object index
    index = productsData.length;
    //length plus 1 will act as the new object id
    let ID = index + 1;
    //create new product object
    let newProduct = {};
    //set newProduct _id = ID
    newProduct._id = ID;
    // set newProduct name = body name
    newProduct.name = req.body.name;
    newProduct.description = req.body.description;
    //append the new product to the products array
    productsData.push(newProduct);
    //send newProduct object back to client
    res.json(newProduct);
});

module.exports = router;