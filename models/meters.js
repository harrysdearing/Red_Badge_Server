module.exports = function(sequelize, DataTypes){
    const meters = sequelize.define('meters', {
        serialNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dateReported: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        printerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return meters
}