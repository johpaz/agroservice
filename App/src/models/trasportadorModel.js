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
  },  ubicacion: {
    type: {
      type: String,
      default: 'Point', 
    },
    coordinates: {
      type: [Number], 
      default: [0, 0],
    },
  },
});

transportadorSchema.index({ ubicacion: '2dsphere' });

const transportador = mongoose.model('Transportador', transportadorSchema);

module.exports = transportador;
