const mongoose = require("mongoose");

const productosMarketplaceSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: String,
  imagen: String,
  precio: String,
  stock: Number,
  isActive: {
    type: Boolean,
    default: true
  },
  tieneVenta: {
    type: Boolean,
    default: false,
  },
  ventasConcretadas: Number,
  amount: {
    type: Number,
    default: 0,
  },
});

const ProductoMarketplace = mongoose.model(
  "ProductoMarketplace",
  productosMarketplaceSchema
);

module.exports = ProductoMarketplace;
