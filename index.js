const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//define the variables for 
//contact data
const contactData = require("./data/contacts");
//vehicle data
const vehicleData = require("./data/vehicles");
//comments data
const commentsData = require("./data/comments");
//products data
const productsData = require("./data/products");

const port = process.env.PORT || 4001;

//app uses the public file of static resources
//and renders them to the page
app.use(express.static('public'));

//app uses the body-parser to accept json
app.use(bodyParser.json());

/***
 * Here are the get all controls for each subject
 * contacts, vehicles, comments, and products
 */
app.get('/contacts', (req, res)=>{
    console.log("GET /contacts");
    //return all the contacts
    res.json(contactData);
});
app.get('/vehicles', (req, res)=>{
    console.log("GET /vehicles");
    //return all the vehicles
    res.json(vehicleData);
});
app.get('/comments', (req, res)=>{
    console.log("GET /comments");
    //return all the comments
    res.json(commentsData);
});
app.get('/products', (req, res)=>{
    console.log("GET /products");
    //return all the products
    res.json(productsData);
});

/**
 * Here are all the individual id GET request controls
 * contacts, vehicles, comments, products
 */
app.get('/contacts/:id', (req, res)=>{
    console.log("GET /contacts/:id ", req.params.id);
    //find the contact with matching id
    let found = contactData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});
app.get('/vehicles/:id', (req, res)=>{
    console.log("GET /vehicles/:id ", req.params.id);
    //find the contact with matching id
    let found = vehicleData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});
app.get('/comments/:id', (req, res)=>{
    console.log("GET /comments/:id ", req.params.id);
    //find the contact with matching id
    let found = commentsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});
app.get('/products/:id', (req, res)=>{
    console.log("GET /products/:id ", req.params.id);
    //find the contact with matching id
    let found = productsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
});

/**
 * Here are all the routes to POST, create a new
 * contact, vehicle, comment, or product and add
 * it to the appropriate array
 */
app.post('/contacts', (req, res)=>{
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
app.post('/vehicles', (req, res)=>{
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
app.post('/comments', (req, res)=>{
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
});
app.post('/products', (req, res)=>{
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


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
