const mongoose = require('mongoose');

const compradorOferenteSchema = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  imagen: String,
  direccion: String,
  telefono: String,
  ciudad: String,
  departamento: String,
  ubicacion: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      type: [Number],
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
    default: 'comprador',
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

compradorOferenteSchema.index({ ubicacion: '2dsphere' });

const CompradorOferente = mongoose.model('CompradorOferente', compradorOferenteSchema);

module.exports = CompradorOferente;
