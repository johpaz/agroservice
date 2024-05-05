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
  imagen:String,
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
  rol: {
    type: String,
    default: 'productor', 
  },
  rating: {
    type: String,
    default: '5', 
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Indicar el tipo de índice para las coordenadas para permitir consultas geoespaciales
productorCampesinoSchema.index({ ubicacion: '2dsphere' });

const Productor = mongoose.model('Productor', productorCampesinoSchema);

module.exports = Productor;
