const mongoose = require("mongoose");
const Productor = require("../../models/productoresModel");
const Comprador = require("../../models/compradorModel");
const Asegurador = require("../../models/aseguradorasModel");
const Transportador = require("../../models/trasportadorModel");
const Admin = require("../../models/adminModel");

const getUser = async (credential) => {
  const isEmail = credential.includes("@");
  let user = null;
  console.log(credential);
  if (isEmail) {
    user = 
           await Productor.findOne({ email: credential }) ||
           await Comprador.findOne({ email: credential }) ||
           await Asegurador.findOne({ email: credential }) ||
           await Transportador.findOne({ email: credential })||
           await Admin.findOne({ email: credential });
           console.log(user);
  } else {
    user =  
           await Productor.findOne({ telefono: credential }) ||
           await Comprador.findOne({ telefono: credential }) ||
           await Asegurador.findOne({ telefono: credential }) ||
           await Transportador.findOne({ telefono: credential })||
           await Admin.findOne({ telefono: credential });
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
