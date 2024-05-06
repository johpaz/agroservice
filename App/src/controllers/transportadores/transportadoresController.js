require('dotenv').config();
const Transportador = require('../../models/trasportadorModel');


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
        message: 'El Transportador ya existe.'
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

    return {
      success: true,
      message: 'Transportador creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Transportador:', error);
    return { success: false, message: 'Error al crear el Transportador.' };
  }
};


module.exports = {
  createTransportador,
};
