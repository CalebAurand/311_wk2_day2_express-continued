const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

//app uses the public file of static resources
//and renders them to the page
app.use(express.static('public'));

//app uses the body-parser to accept json
app.use(bodyParser.json());

/**
 * Define the routers for all of the routes
 * files.
 */
const contactsRouter = require('./routes/contacts');
const vehiclesRouter = require('./routes/vehicles');
const commentsRouter = require('./routes/comments');
const productsRouter = require('./routes/products');

/***
 * Here are the get all controls for each subject
 * contacts, vehicles, comments, and products
 */
app.use(contactsRouter);
app.use(vehiclesRouter);
app.use(commentsRouter);
app.use(productsRouter);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
