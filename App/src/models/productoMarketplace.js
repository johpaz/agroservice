const mongoose = require('mongoose')

const productosMarketplaceSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: String,
  imagen:String,
  precio: String,
  stock:String,
  tieneVenta: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    default: 0
  },
})

const ProductoMarketplace = mongoose.model('ProductoMarketplace', productosMarketplaceSchema)

module.exports = ProductoMarketplace