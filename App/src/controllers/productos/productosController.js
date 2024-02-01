require('dotenv').config();
const Producto = require('../../models/productosModel');


const createProducto = async (
  nombre,
  descripcion,
  cantidad,
  categorias
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingProducto = await Producto.findOne({id:_id });

    if (existingProducto) {
      return {
        success: false,
        message: 'El Producto ya existe.'
      };
    }

    

    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newProducto = new Producto({
      nombre:nombre,
      descripcion:descripcion,
      cantidad:cantidad,
      categorias:categorias
    });

    await newProducto.save();

    return {
      success: true,
      message: 'Producto creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Producto:', error);
    return { success: false, message: 'Error al crear el Producto.' };
  }
};


module.exports = {
  createProducto,
};
