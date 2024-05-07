const mongoose = require("mongoose");

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
  imagen: String,
  telefono: {
    type: String,
    required: true,
    unique: true,
  },
  direccion: String,
  ciudad: String,
  departamento: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  ubicacion: {
    type: {
      type: String,
      default: "Point", // Tipo de dato para coordenadas
    },
    coordinates: {
      type: [Number], // [longitud, latitud]
      default: [0, 0],
    },
  },
  rating: {
    type: String,
    default: "5",
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

transportadorSchema.index({ ubicacion: "2dsphere" });

const transportador = mongoose.model("Transportador", transportadorSchema);

module.exports = transportador;
