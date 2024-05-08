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

})

const ProductoMarketplace = mongoose.model('ProductoMarketplace', productosMarketplaceSchema)

module.exports = ProductoMarketplace