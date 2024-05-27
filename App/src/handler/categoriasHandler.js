const { createCategoria } = require('../controllers/categorias/categoriasController');

const handleCreateCategoria = async (req, res) => {
  // Extraer datos del cuerpo de la solicitud
  const { nombre } = req.body;

  try {
    // Llamar a la función para crear la categoría
    const result = await createCategoria(nombre);

    // Devolver una respuesta exitosa
    res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear la categoría:', error);
    // Devolver una respuesta de error en caso de problemas al crear la categoría
    res.status(500).json({
      success: false,
      message: 'Error al crear la categoría.',
      error: error.message || error,
    });
  }
};

module.exports = {
  handleCreateCategoria,
};
