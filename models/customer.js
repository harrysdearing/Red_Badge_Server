module.exports = function(sequelize, DataTypes){
    const customer = sequelize.define('customer', {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        expDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        billingCycle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return customer
}