// Move the appropriate "data" from the router files to the controller files
//* Ex. move `const comments = require("../data/comments")` into the controller 
//  file so it has access to the array

//define the contact data to be accessed
const productsData = require("../data/products");

// We will make three functions in each file: "list", "show" and "create"
const list = (req, res)=>{
    console.log("GET /products");
    //return all the products
    res.json(productsData);
};

const show = (req, res)=>{
    console.log("GET /products/:id ", req.params.id);
    //find the contact with matching id
    let found = productsData.find(el => el._id == req.params.id);
    //send back the found contact in json
    res.json(found);
};

const create = (req, res)=>{
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
};


// * Export the functions at the end like:
// *  `module.exports = { list, show, create }`
// * Import and use the controller functions in the appropriate router
// * Ex. `app.get('/comments', commentController.list)`

module.exports = {list, show, create};