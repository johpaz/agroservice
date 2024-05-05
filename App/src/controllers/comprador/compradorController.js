require('dotenv').config();
const Comprador = require('../../models/compradorModel');


const createComprador = async (
  nit,
  nombre,
  imagen,
  direccion,
  telefono,
  ciudad,
  departamento,
  ubicacion,
  email,
  password,
  rol
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingComprador = await Comprador.findOne({ nit: nit });

    if (existingComprador) {
      return {
        success: false,
        message: 'El Comprador ya existe.'
      };
    }

    

    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newComprador = new Comprador({
      nit: nit,
      nombre:nombre,
      imagen:imagen,
      direccion:direccion,
      telefono:telefono,
      ciudad:ciudad,
      departamento:departamento,
      ubicacion:ubicacion,
      email:email,
      password:password,
      rol:rol
    });

    await newComprador.save();

    return {
      success: true,
      message: 'Comprador creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Comprador:', error);
    return { success: false, message: 'Error al crear el Comprador.' };
  }
};


module.exports = {
  createComprador,
};
