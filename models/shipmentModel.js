const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

const Shipment = sequelize.define('shipment',{
    address: DataTypes.STRING(),
    status:  DataTypes.STRING(),
    price: DataTypes.INTEGER(),
}, {
    validate: true,
    timestamps: false,
    allowNull: false,
})

module.exports = Shipment;