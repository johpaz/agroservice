const mongoose = require('mongoose');

const transportadorSchema = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  telefono: String,
  direccion: String,
  ciudad: String,
  departamento: String,
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
    default: 'transportador',
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
  imagen:String,
  rating: {
    type: String,
    default: '5', 
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

transportadorSchema.index({ ubicacion: '2dsphere' });

const transportador = mongoose.model('Transportador', transportadorSchema);

module.exports = transportador;
