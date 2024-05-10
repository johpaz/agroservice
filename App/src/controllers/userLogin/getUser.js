const mongoose = require("mongoose");
const Productor = require("../../models/productoresModel");
const Comprador = require("../../models/compradorModel");
const Asegurador = require("../../models/aseguradorasModel");
const Transportador = require("../../models/trasportadorModel");

const getUser = async (credential) => {
  const isEmail = credential.includes("@");
  let user = null;
  
  if (isEmail) {
    const productor = await Productor.findOne({ email: credential });
        if(productor) user = productor
        
    const comprador = await Comprador.findOne({ email: credential });
        if(comprador) user = comprador
    
    const asegurador = await Asegurador.findOne({ email: credential });
        if(asegurador) user = asegurador
       
    const transportador = await Transportador.findOne({ email: credential });
            if(transportador) user = transportador
            
    } else {

        const productor = await Productor.findOne({ telefono: credential });
        if(productor) user = productor
        
    const comprador = await Comprador.findOne({ telefono: credential });
        if(comprador) user = comprador
    
    const asegurador = await Asegurador.findOne({ telefono: credential });
        if(asegurador) user = asegurador
       
    const transportador = await Transportador.findOne({ telefono: credential });
            if(transportador) user = transportador
 
  }

  if(user){
    return user
  } 

};
const getUserById = async (req, res) => {
  const { id  } = req.params
  console.log(id);
  // Buscar el comprador por su ID
  const comprador = await Comprador.findById(id);
  
  // Si no se encuentra un comprador, buscar un asegurador
  if (!comprador) {
    const asegurador = await Asegurador.findById(id);
    
    // Si no se encuentra un asegurador, buscar un transportador
    if (!asegurador) {
      const transportador = await Transportador.findById(id);
      
      // Si no se encuentra un transportador, lanzar un error
      if (!transportador) throw new Error(`No existe ningún usuario con el ID: ${id}`);
      
      // Si se encuentra un transportador, devolverlo
      return res.status(200).json({ transportador });
    }
    
    // Si se encuentra un asegurador, devolverlo
    return res.status(200).json({ asegurador });
  }
  
  // Si se encuentra un comprador, devolverlo
  return res.status(200).json({ comprador });
};


module.exports = {getUser,getUserById};
