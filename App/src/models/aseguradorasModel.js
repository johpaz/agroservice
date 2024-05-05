const mongoose = require('mongoose');

const aseguradoraSchema = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  imagen: String,
  telefono: String,
  direccion: String,
  ciudad: String,
  departamento: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imagen:String,
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    default: 'asegurador',
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

const Aseguradora = mongoose.model('Aseguradora', aseguradoraSchema);

module.exports = Aseguradora;
