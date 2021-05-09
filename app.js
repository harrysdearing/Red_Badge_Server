require('dotenv').config(); 
let express = require('express'); 
const app = express();
const sequelize = require('./database');
const user = require('./controllers/usercontroller.js');
const company = require('./controllers/companycontroller.js');
const customer = require('./controllers/customercontroller.js');
const printer = require('./controllers/printercontroller.js');
const meters = require('./controllers/metercontroller.js');
const dca = require('./controllers/dcacontroller.js');


sequelize.sync(); 
app.use(require('./middleware/headers'));


app.use(express.json()); 

app.use('/company', company);
app.use('/user', user);
app.use('/customer', customer);
app.use('/printer', printer);
app.use('/meters', meters);
app.use('/dca', dca);


app.listen(process.env.PORT, function() {
    console.log(`App is listening on port ${process.env.PORT}`);
});
