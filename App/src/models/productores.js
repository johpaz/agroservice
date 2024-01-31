const mongoose = require('mongoose');

const productorCampesinoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: String,
  telefono: String,
  mail: {
    type: String,
    required: true,
    unique: true,
  },
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
});

// Indicar el tipo de índice para las coordenadas para permitir consultas geoespaciales
productorCampesinoSchema.index({ ubicacion: '2dsphere' });

const ProductorCampesino = mongoose.model('ProductorCampesino', productorCampesinoSchema);

module.exports = ProductorCampesino;
