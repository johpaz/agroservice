const Blog = require('../../models/blogModel');

const createBlog = async ({titulo, contenido, autor, fechaPublicacion, etiquetas, urlSlug, metaDescripcion}) => {
  console.log(titulo);
  try {
    // Verificar si el blog ya existe por su título
    const existingBlog = await Blog.findOne({ titulo: titulo });
    
    if (existingBlog) {
      return {
        success: false,
        message: 'El Blog con este título ya existe.'
      };
    }

    // Crear una nueva instancia del modelo Blog
    const newBlog = new Blog({
      titulo: titulo,
      contenido: contenido,
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
