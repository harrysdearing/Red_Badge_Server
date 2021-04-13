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
        startMono: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        endMono: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        dateLastReported: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monoPrice: {
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        colorPrice: {
            type: DataTypes.DECIMAL,
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
            type: DataTypes.INTEGER,
            allowNull: true
        },
        flat_rate: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mono_exception: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        color_exception: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        month_exception: {
            type: DataTypes.STRING,
            allowNull: true
        },
        billable: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    })
    return printer
}