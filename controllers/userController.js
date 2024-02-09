const {User, Shipment} = require("../models/associations");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const handleOrderStatus = async (req,res) => {
    const {userID} = req.params;
    
    // think about the route (what you need to receive from the client) that is connected to this method
    // take a user ID
    // find orders 
    // return the status of the orders

    let yourUser = await User.findByPk(userID);
    let orders = await yourUser.getShipments();
    // let orders = await Shipment.findAll({where: {userId: userID}})
    console.log(orders);
    res.json(orders);
}

const createUser = async (req, res) => {
    let {name, email, password} = req.body;
    const hashedPW = await bcrypt.hash(password, 12);
    password = hashedPW;
    let newUser = await User.create({name, email, password});
    // console.log(name, email, password);
    res.json(newUser);
    
}

// postman to send new user info (User column) - function that handles a new user

// take that, hash the password, save that entitity into User table

// return the user ()

const handleLogin = async (req, res) => {
    const {email,password} = req.body;
    const backendUser = await User.findOne({where: {email: email}});
    // JWT email, 

    const isMatch = await bcrypt.compare(password, backendUser.password);
    const token = jwt.sign({backendUser},'myPassword',{expiresIn: '3m'});
    console.log(token);

    res.json({login: isMatch ? true : false, access: isMatch ? token : null});
}

const handleToken = async (req,res) => {
    console.log("Token",req.body.access);
    try {
        const tokenData = jwt.verify(req.body.access,'myPassword');
        console.log('Legit login', tokenData)
    } catch (error) {
        console.log('You had an error', error)
    }
    res.json({good: true})
}

//another handler function handling logings (email, password) .compare

// (Create a JWT and send to the client)
    // const token = jwt.sign(payload, secretKey, {expiresIn: '30m'});
    // const tokenData = jwt.verify(accessToken, secretKey);

module.exports = {
    handleOrderStatus,
    handleLogin,
    createUser,
    handleToken
}