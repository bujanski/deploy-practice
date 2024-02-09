const Company = require("./companyModel");
const Shipment = require("./shipmentModel");
const User = require("./userModel");


Company.hasMany(Shipment);
Shipment.belongsTo(Company);

User.hasMany(Shipment);
Shipment.belongsTo(User);


module.exports = {
    Company,
    Shipment,
    User
}