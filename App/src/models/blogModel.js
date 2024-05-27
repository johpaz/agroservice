const mongoose = require('mongoose');

// Define el esquema del blog
const blogSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,

  },
  contenido: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true,

  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  },
  etiquetas: {
    type: [String],
    default: []
  },
  comentarios: [{
    usuario: {
      type: String,
      required: true,

    },
    comentario: {
      type: String,
      required: true
    },
    fecha: {
      type: Date,
      default: Date.now
    }
  }],
  vistas: {
    type: Number,
    default: 0
  },
  urlSlug: {
    type: String,
    required: true,
    unique: true,
  },
  metaDescripcion: {
    type: String,
    }
});

// Crea el modelo basado en el esquema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
