require('dotenv').config();
const Cliente = require('../../models/clienteModel');
const bcrypt = require('bcrypt');


const createClient = async (
  name,
  nit,
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingUser = await Cliente.findOne({ nit: nit });

    if (existingUser) {
      return {
        success: false,
        message: 'El usuario ya existe. Por favor, elige otro correo electrónico.'
      };
    }

    // Hash de la contraseña antes de almacenarla
//    const hashedPassword = await bcrypt.hash(password, 10); // 10 es el número de rondas de hashing

    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newProfile = new Cliente({
      name:name,
      nit: nit    
    });

    await newProfile.save();

    return {
      success: true,
      message: 'Cliente creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    return { success: false, message: 'Error al crear el perfil.' };
  }
};


module.exports = {
  createClient,
};
