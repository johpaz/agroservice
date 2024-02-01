const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
  productor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProductorCampesino',
    required: true,
  },
  producto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  fechaCosecha: {
    type: Date,
    required: true,
  },
  precioPorUnidad: {
    type: Number,
    required: true,
  },
  unidadMedida: {
    type: String,
    required: true,
  },
  fincas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Finca',
    },
  ],  
  ofertasCompradores: [
    {
      comprador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompradorOferente',
      },
      precioOferta: Number,
    },
  ],
  ofertaTransportador: {
    transportador: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transportador',
    },
    precioOferta: Number,
  },
  ofertaAseguradora: {
    aseguradora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aseguradora',
    },
    precioOferta: Number,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

const Publicacion = mongoose.model('Publicacion', publicacionSchema);

module.exports = Publicacion;
