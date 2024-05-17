const mongoose = require("mongoose");

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
  redirectPath:{
    type:String,
    default: "/dashboardClient"
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

const Aseguradora = mongoose.model("Aseguradora", aseguradoraSchema);

module.exports = Aseguradora;
