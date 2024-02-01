require('dotenv').config();
const Categoria = require('../../models/categoriaModel');


const createCategoria = async (
  nombre,
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingCategoria = await Categoria.findOne({id:_id });

    if (existingCategoria) {
      return {
        success: false,
        message: 'El Categoria ya existe.'
      };
    }

    

    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newCategoria = new Categoria({
      nombre:nombre,
    });

    await newCategoria.save();

    return {
      success: true,
      message: 'Categoria creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Categoria:', error);
    return { success: false, message: 'Error al crear el Categoria.' };
  }
};


module.exports = {
  createCategoria,
};
