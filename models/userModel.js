const { sequelize } = require('../config/connection');
const { DataTypes } = require("sequelize");



const User = sequelize.define('user', {
    name:  DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
}, {
    allowNull: false,
    timestamps: false
});


module.exports = User;


