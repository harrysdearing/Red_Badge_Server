module.exports = function(sequelize, DataTypes){
    const printer = sequelize.define('printer', {
        printerModel: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assetId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        serialNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ipAddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monoPrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        colorPrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        base_mono_volume: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        base_color_volume: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        base_rate: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        flat_rate: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        billable: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    })
    return printer
}