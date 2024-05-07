const mongoose = require("mongoose");
const Productor = require("../../models/productoresModel");
const Comprador = require("../../models/compradorModel");
const Asegurador = require("../../models/aseguradorasModel");
const Transportador = require("../../models/trasportadorModel");

const getUser = async (credential) => {
    console.log('credential', credential)
  const isEmail = credential.includes("@");
  console.log('is email', isEmail)
  let user;
  
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
  } else throw Error('Usuario no encontrado')

};

module.exports = getUser;
