const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");


const Company = sequelize.define('company', {
    name: DataTypes.STRING(),
    address: {
      type: DataTypes.STRING(),
      unique: true
    }
}, {
    validate: true,
    timestamps: false,
    allowNull: false,
})

module.exports = Company;