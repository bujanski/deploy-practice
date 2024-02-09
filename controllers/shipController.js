


const {Shipment, Company} = require("../models/associations");

const handleShip = async (req,res) => {

    const {id} = req.params;

    console.log(id);

    let yourShipment = await Shipment.findByPk(id);
    console.log(yourShipment.toJSON());

    res.json(yourShipment)
}

const changeOrderStatus = async (req,res) => {
    const {id} = req.params;
    const {body} = req;
    console.log('body is', body)
    let yourShipment = await Shipment.findByPk(id);
    yourShipment.set({status: 'On ice 🧊'});
    yourShipment.save();
    res.json({hi: true});
}

const returnToSender = async (req, res) => {
    const {id} = req.params;
    let returnShipment = await Shipment.findByPk(id);
    // let returnCompany = await Company.findByPk(returnShipment.companyId)
    let returnCompany = await returnShipment.getCompany();
    console.log(returnCompany);
    returnShipment.set({address: returnCompany.address});
    returnShipment.save();
    res.json({hi: true});
}



module.exports = {
    handleShip,
    changeOrderStatus,
    returnToSender
}