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
  },
  urlImage:{
    type:String,
  },
  activo: {
    type: Boolean,
    default: true
  }
});

// Método estático para desactivar eventos pasados
eventoSchema.statics.desactivarEventosPasados = async function() {
  const ahora = new Date();
  const eventos = await this.find({ activo: true });
  
  for (let evento of eventos) {
    const unDiaDespues = new Date(evento.fecha);
    unDiaDespues.setDate(unDiaDespues.getDate() + 1);
    
    if (ahora > unDiaDespues) {
      evento.activo = false;
      await evento.save();
    }
  }
};

// Pre-save hook para desactivar eventos pasados al guardar
eventoSchema.pre('save', function(next) {
  const ahora = new Date();
  const unDiaDespues = new Date(this.fecha);
  unDiaDespues.setDate(unDiaDespues.getDate() + 1);

  if (ahora > unDiaDespues) {
    this.activo = false;
  }
  next();
});

// Crea el modelo basado en el esquema
const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;
