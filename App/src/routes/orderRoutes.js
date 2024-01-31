const {Router}= require('express');

const {createOrder} = require('../controllers/orders/orderControler');
const {getAllOrders} = require('../controllers/orders/getOrderController')

const orderRouter = Router();

// Ruta para manejar la autenticación
orderRouter.post('/', createOrder);
orderRouter.get('/', getAllOrders);

module.exports = orderRouter;
