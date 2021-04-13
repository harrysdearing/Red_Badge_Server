module.exports = function(sequelize, DataTypes) {
    const company = sequelize.define('company', { //this is the name of the table
        companyName: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        currency: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        address: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        city: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        state: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return company
}