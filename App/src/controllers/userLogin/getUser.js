const mongoose = require("mongoose");
const Dropshiper = require("../../models/dropshipperModel");
const Cliente = require("../../models/clienteModel");
const Proveedor = require("../../models/proveedorModel");
const Transportador = require("../../models/trasportadorModel");
const Admin = require("../../models/adminModel");

const getUser = async (credential) => {
  const isEmail = credential.includes("@");
  let user = null;
  console.log(credential);
  if (isEmail) {
    user = 
           await Dropshiper.findOne({ email: credential }) ||
           await Cliente.findOne({ email: credential }) ||
           await Proveedor.findOne({ email: credential }) ||
           await Transportador.findOne({ email: credential })||
           await Admin.findOne({ email: credential });
           console.log(user);
  } 

  return user;
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Comprador.findById(id) ||
                 await Asegurador.findById(id) ||
                 await Transportador.findById(id) ||
                 await Productor.findById(id);

    if (!user) {
      throw new Error(`No existe ningún usuario con el ID: ${id}`);
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getUser, getUserById };
