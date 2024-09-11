const { createBlog } = require('../controllers/blog/blogController');

const handleBlogCreate = async (req, res) => {
  const {
    titulo,
    contenido, // Se espera que sea un array de objetos
    autor,
    etiquetas,
    urlSlug,
    metaDescripcion,
    fechaPublicacion // Asegúrate de que esto venga en el formato correcto o genera una fecha por defecto
  } = req.body;
  
  // Convertir la cadena de texto de fecha a un objeto de tipo Date si se proporciona una fecha
  const fechaPublicacionDate = fechaPublicacion ? new Date(fechaPublicacion) : new Date();

  try {
    // Llamar a la función para crear el blog
    const blog = await createBlog({
      titulo,
      contenido, // Asegúrate de que esté en el formato correcto (array de objetos)
      autor,
      fechaPublicacion: fechaPublicacionDate,
      etiquetas,
      urlSlug,
      metaDescripcion
    });
    res.status(200).json(blog);
    
  } catch (error) {
    console.error('Error al crear el blog en handler:', error);
    // Devolver una respuesta de error en caso de problemas al crear el blog
    res.status(500).json({
      success: false,
      message: 'Error al crear el blog en el handler.',
      error: error.message
    });
  }
};

module.exports = {
  handleBlogCreate
};
