const mongoose = require("mongoose");

const compradorOferenteSchema = new mongoose.Schema({
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
  direccion: String,
  telefono: {
    type: String,
    required: true,
    unique: true,
  },
  ciudad: String,
  departamento: String,
  ubicacion: {
    type: {
      type: String,
      default: "Point",
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
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  usuarioMarketplace: {
    type: Boolean,
    default: true,
  },
  productosMarketplace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductoMarketplace",
  },
  comprasEnMarketplace: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PedidoMarketplace",
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

compradorOferenteSchema.index({ ubicacion: "2dsphere" });

const CompradorOferente = mongoose.model(
  "CompradorOferente",
  compradorOferenteSchema
);

module.exports = CompradorOferente;
