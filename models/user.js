module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('user', { //this is the name of the table
        firstName: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        role: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        username: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return User
}