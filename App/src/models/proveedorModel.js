const mongoose = require("mongoose");

const proveedorSchema = new mongoose.Schema({
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
    default: "/dashboardProveedor"
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
  
  rating: {
    type: String,
    default: "5",
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

const Proveedor = mongoose.model("Proveedor", proveedorSchema);

module.exports = Proveedor;
