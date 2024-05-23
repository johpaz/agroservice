const Categoria = require('../../models/categoriaModel');

const createCategoria = async (nombre) => {
  
  try {
    // Verificar si la categoría ya existe por su nombre
    const existingCategoria = await Categoria.findOne({ nombre });

    if (existingCategoria) {
      return {
        success: false,
        message: 'La categoría ya existe.'
      };
    }

    // Crear una nueva categoría
    const newCategoria = new Categoria({ nombre });

    await newCategoria.save();

    return {
      success: true,
      message: 'Categoría creada exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear la categoría:', error);
    return {
      success: false,
      message: 'Error al crear la categoría.'
    };
  }
};

module.exports = {
  createCategoria,
};
