const mongoose = require('mongoose');

const productorCampesinoSchema = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: String,
  telefono: String,
  ciudad:String,
  departamento:String,
  ubicacion: {
    type: {
      type: String,
      default: 'Point', // Tipo de dato para coordenadas
    },
    coordinates: {
      type: [Number], // [longitud, latitud]
      default: [0, 0],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: 'productor', // Puedes definir roles como 'productor', 'comprador', etc.
  },
});

// Indicar el tipo de índice para las coordenadas para permitir consultas geoespaciales
productorCampesinoSchema.index({ ubicacion: '2dsphere' });

const ProductorCampesino = mongoose.model('ProductorCampesino', productorCampesinoSchema);

module.exports = ProductorCampesino;
