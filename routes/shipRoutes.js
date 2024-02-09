const express = require('express');
const shipController = require('../controllers/shipController');
const shipRouter = express.Router();

shipRouter.get('/:id',shipController.handleShip);
shipRouter.put('/:id/updateOrder', shipController.changeOrderStatus);
shipRouter.put('/:id/rts', shipController.returnToSender);


module.exports = shipRouter;