const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  items: [
    {
      idItem: { type: Number, required: true },
      nombreProducto: { type: String, required: true },
      cantidad: { type: Number, required: true },
      precioUnitario: { type: Number, required: true },
    },
  ],
  
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
