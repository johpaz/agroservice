require('dotenv').config();
const Transportador = require('../../models/trasportadorModel');
const Role = require('../../models/roleModel');

const createTransportador = async (
  nit,
  nombre,
  imagen,
  direccion,
  telefono,
  ciudad,
  departamento,
  email,
  password,
  ubicacion,
  role
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingTransportador = await Transportador.findOne({ nit: nit });

    if (existingTransportador) {
      return {
        success: false,
        message: 'El Transportador ya esta registrado.'
      };
    }
   // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newTransportador = new Transportador({
      nit: nit,
      nombre:nombre,
      imagen:imagen,
      direccion:direccion,
      telefono:telefono,
      ciudad:ciudad,
      departamento:departamento,
      email:email,
      password:password,
      ubicacion:ubicacion,
      role:role
    });

    await newTransportador.save();
    const userType = await Role.findOne({ _id: newTransportador.role }) 
    return {
      session: newTransportador,success:true,userType: userType.name 
    };
  } catch (error) {
    console.error('Error al crear el Transportador:', error);
    return { success: false, message: 'Error al crear el Transportador.' };
  }
};


module.exports = {
  createTransportador,
};
