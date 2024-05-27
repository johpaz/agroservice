const mongoose = require('mongoose');

// Define el esquema del evento
const eventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  detalle: {
    type: String,
    required: true,
    trim: true
  },
  fecha: {
    type: Date,
    required: true
  },
  urlLink: {
    type: String,
    required: true,
    trim: true
  },
  lugar: {
    type: String,
    required: true,
    trim: true
  }
});

// Crea el modelo basado en el esquema
const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;
