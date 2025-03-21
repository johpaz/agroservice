const mongoose = require("mongoose");

const dropshipper = new mongoose.Schema({
  nit: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: String,
  telefono: {
    type: String,
    required: true,
    unique: true,
  },
  imagen: String,
  ciudad: String,
  departamento: String,
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ProductoMarketplace",
  },
  pedidosEnMarketplace: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "PedidoMarketplace",
  },
 
  redirectPath:{
    type:String,
    default: "/dashboardDropshipper"
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



const Dropshipper = mongoose.model("Dropshipper", dropshipper);

module.exports = Dropshipper;
