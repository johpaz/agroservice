const Order = require('../../models/orderModel');

// Controlador para obtener todos los roles
const getAllOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  getAllOrders,
};
