const mongoose = require("mongoose");

const pedidoMarketplaceSchema = new mongoose.Schema({
  // Definir el esquema para el pedido
  productos: {
    type: [ProductoSchema],
    required: true,
  },
  estaPago: {
    type: Boolean,
    default: false,
  },
  despachado: {
    type: Boolean,
    default: false,
  },
  comprador: {
    id: String,
    nombre: String,
    telefono: String,
    direccion: String,
    ciudad: String,
    departamento: String,
  },
});

// Crear el modelo a partir del esquema
const PedidoMarketplace = mongoose.model(
  "PedidoMarketplace",
  pedidoMarketplaceSchema
);

module.exports = PedidoMarketplace;
