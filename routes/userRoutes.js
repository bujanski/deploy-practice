const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();


userRouter.get('/:userID/orderStatus',userController.handleOrderStatus)
userRouter.put('/login', userController.handleLogin)
userRouter.post('/create', userController.createUser)
userRouter.get('/token', userController.handleToken)

module.exports = userRouter;