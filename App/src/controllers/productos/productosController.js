const Producto = require('../../models/productosModel');

const createProducto = async ({ nombre, descripcion, imagen, categorias }) => {
  try {
    // Crear un nuevo producto con los campos proporcionados
    const newProducto = new Producto({
      nombre,
      descripcion,
      imagen,
      categorias
    });

    await newProducto.save();

    return {
      success: true,
      message: 'Producto creado exitosamente.',
      data: newProducto
    };
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw new Error('Error al crear el producto.');
  }
};

module.exports = {
  createProducto,
};
