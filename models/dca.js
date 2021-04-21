module.exports = function(sequelize, DataTypes) {
    const dca = sequelize.define('dca', { //this is the name of the table
        dca_company: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: false
        },
        dca_username: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        dca_password: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        dca_url: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        dca_key: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        dca_secret: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        },
        api_key: { //this is the data within the table
            type: DataTypes.STRING,
            allowNull: true
        }

    })
    return dca
}