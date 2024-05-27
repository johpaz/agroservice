const { createBlog } = require('../controllers/blog/blogController');

const handleBlogCreate = async (req, res) => {
  const {
    titulo,
    contenido,
    autor,
    etiquetas,
    urlSlug,
    metaDescripcion
  } = req.body;
  
  // Convertir la cadena de texto de fecha a un objeto de tipo Date
  const fechaPublicacionDate = new Date();
  try {
    // Llamar a la función para crear el blog
    const blog = await createBlog({
      titulo,
      contenido,
      autor,
      fechaPublicacionDate,
      etiquetas,
      urlSlug,
      metaDescripcion}
    );
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
