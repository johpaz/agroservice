const mongoose = require('mongoose');
const { Schema } = mongoose;

// Definición del esquema para el contenido del blog
const contenidoSchema = new Schema({
  tipo: {
    type: String,
    enum: ['parrafo', 'encabezado', 'subencabezado', 'lista', 'cita', 'imagen'],
    required: true
  },
  contenido: {
    type: String,
    trim: true
  },
  nivel: {
    type: Number,
    min: 1,
    max: 6
  },
  items: {
    type: [String]
  },
  src: {
    type: String,
    trim: true
  }
});



const respuestaSchema = new Schema({
  autor: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  likes: {
    like:{ type: Number, default: 0 },
    userId:{type: [String], // Array de userIds que han dado like
      default: []
    },
  },
  dislikes: {
    dislike:{ type: Number, default: 0 },
    userId:{type: [String], // Array de userIds que han dado like
      default: []
    }
  },
  // Aquí es donde se permite la anidación de respuestas dentro de respuestas
  respuestas: [{ type: Schema.Types.ObjectId, ref: 'Respuesta' }]
});
// Definición del esquema para los comentarios
const comentarioSchema = new Schema({
  autor: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },
  respuestas: [respuestaSchema],
  likes: {
    like:{ type: Number, default: 0 },
    userId:{type: [String], // Array de userIds que han dado like
      default: []
    },
  },
  dislikes: {
    dislike:{ type: Number, default: 0 },
    userId:{type: [String], // Array de userIds que han dado like
      default: []
    }
  },
});


// Definición del esquema para un Blog
const blogSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  autor: {
    type: String,
    required: true
  },
  fechaPublicacion: {
    type: Date,
    default: Date.now
  },
  metaDescripcion: {
    type: String,
    trim: true
  },
  contenido: {
    type: [contenidoSchema],
    required: true
  },
  etiquetas: {
    type: [String],
    default: []
  },
  urlSlug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  vistas: Number,
  comentarios: [comentarioSchema]
});

// Crear un modelo a partir del esquema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
