const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: String,
  cantidad:String,
  
  categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Categoria',
    },
  ],
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
