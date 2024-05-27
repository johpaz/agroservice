const { createProducto } = require('../controllers/productos/productosController');

const handleCreateProductos = async (req, res) => {
  // Extraer datos del cuerpo de la solicitud
  const { nombre, descripcion, imagen, categorias } = req.body;

  try {
    // Llamar a la función para crear el producto
    const result = await createProducto({ nombre, descripcion, imagen, categorias });

    // Devolver una respuesta exitosa
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    // Devolver una respuesta de error en caso de problemas al crear el producto
    res.status(500).json({
      success: false,
      message: 'Error al crear el producto.',
      error: error.message || error,
    });
  }
};

module.exports = {
  handleCreateProductos,
};
