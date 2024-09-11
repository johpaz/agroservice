const Blog = require('../../models/blogModel');

const createBlog = async ({titulo, contenido, autor, fechaPublicacion, etiquetas, urlSlug, metaDescripcion}) => {
  try {
    // Verificar si el blog ya existe por su URL slug
    const existingBlog = await Blog.findOne({ urlSlug: urlSlug });
    
    if (existingBlog) {
      return {
        success: false,
        message: 'El Blog con esta URL ya existe.'
      };
    }

    // Crear una nueva instancia del modelo Blog
    const newBlog = new Blog({
      titulo: titulo,
      contenido: contenido, // Asegúrate de que `contenido` esté en el formato correcto (array de objetos)
      autor: autor,
      fechaPublicacion: fechaPublicacion,
      etiquetas: etiquetas,
      urlSlug: urlSlug,
      metaDescripcion: metaDescripcion
    });
    
    // Guardar el nuevo blog en la base de datos
    await newBlog.save();
    
    return {
      success: true,
      newBlog
    };
    
  } catch (error) {
    console.error('Error al crear el blog:', error);
    return { success: false, message: 'Error al crear el blog.' };
  }
};

module.exports = {
  createBlog
};
