const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Role", 
    required: true 
  },
  redirectPath: {
    type: String,
    default: "/dashboardAdmin"
  }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
