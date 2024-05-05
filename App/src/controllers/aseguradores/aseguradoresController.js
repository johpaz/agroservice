require('dotenv').config();
const Aseguradoras = require('../../models/aseguradorasModel');


const createAseguradora = async (
  nit,
  nombre,
  imagen,
  direccion,
  telefono,
  ciudad,
  departamento,
  email,
  password,
  rol
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingAseguradora = await Aseguradoras.findOne({ nit: nit });

    if (existingAseguradora) {
      return {
        success: false,
        message: 'La Aseguradora ya existe.'
      };
    }

    

    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newAseguradora = new Aseguradoras({
      nit: nit,
      nombre:nombre,
      imagen:imagen,
      direccion:direccion,
      telefono:telefono,
      ciudad:ciudad,
      departamento:departamento,
      email:email,
      password:password,
      rol:rol
    });

    await newAseguradora.save();

    return {
      success: true,
      message: 'Aseguradora creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear la aseguradora:', error);
    return { success: false, message: 'Error al crear la aseguradora.' };
  }
};


module.exports = {
  createAseguradora,
};
