//this is your main hub because of the package.json file
//this is how to set up the server
//then in the terminal below i typed node app.js
//ctrl + C will stop the server at any time
//ONCE CONNECTED --USE NODEMON TO RECONNECT

//REQUIRE ALLOWS US TO PULL IN SOMETHING FROM ANOTHER FILE
require('dotenv').config(); //require it at the top level and make items in an .env file available to our whole application
let express = require('express'); //we are importing this using express.  this is one of the node_modules we have within package.json
const app = express();
const sequelize = require('./database');
const user = require('./controllers/usercontroller.js');
const company = require('./controllers/companycontroller.js');
const customer = require('./controllers/customercontroller.js');
const printer = require('./controllers/printercontroller.js');
const dca = require('./controllers/dcacontroller.js');


sequelize.sync(); //method to ensure all of our models and tables in our server are put onto the database if they're not there
app.use(require('./middleware/headers'));


app.use(express.json()); //this is what allows us to accept the JSON into our server

app.use('/company', company);
app.use('/user', user);
app.use('/customer', customer);
app.use('/printer', printer);
app.use('/dca', dca);


app.listen(3000, function() {
    console.log('App is listening on port 3000');
});
