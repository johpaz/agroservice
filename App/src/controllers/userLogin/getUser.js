const mongoose = require("mongoose");
const Dropshiper = require("../../models/dropshipperModel");
const Cliente = require("../../models/clienteModel");
const Proveedor = require("../../models/proveedorModel");
const Transportador = require("../../models/trasportadorModel");
const Admin = require("../../models/adminModel");

const getUser = async (email) => {
  
  let user = null;
 
  if (email) {
    user = 
           await Dropshiper.findOne({ email: email }) ||
           await Cliente.findOne({ email: email }) ||
           await Proveedor.findOne({ email: email }) ||
           await Transportador.findOne({ email: email })||
           await Admin.findOne({ email: email });
             } 

  return user;
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Cliente.findById(id) ||
                 await Proveedor.findById(id) ||
                 await Transportador.findById(id) ||
                 await Dropshiper.findById(id);

    if (!user) {
      throw new Error(`No existe ningún usuario con el ID: ${id}`);
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getUser, getUserById };
