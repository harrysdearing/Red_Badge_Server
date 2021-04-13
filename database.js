//HOW CAN WE CONNECT TO THE DATABASE

const Sequelize = require('sequelize'); //creating a new instance of sequelize

//                                database name      , username   , password
const sequelize = new Sequelize('red-badge-project', 'postgres', 'password', {
    host: 'localhost', //hosting this on our local computer
    dialect: 'postgres'
});

//NEXT WE NEED TO AUTHENTICATE -- test the connection (NOT REQUIRED)

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection works');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

company = sequelize.import("./models/company")
User = sequelize.import("./models/user")
customer = sequelize.import("./models/customer")
printer = sequelize.import("./models/printer")
User.belongsTo(company)
company.hasMany(User)
customer.hasOne(company)
company.belongsTo(customer)
printer.hasOne(company)
company.belongsTo(printer)
printer.hasOne(customer)
customer.belongsTo(printer)

module.exports = sequelize