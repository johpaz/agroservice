const mongoose = require('mongoose');
const Blog = require('../../models/blogModel'); 


const getAllBlog = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const blog = await Blog.find();
  
      return res.status(200).json({ blog });
    } catch (error) {
      console.error('Error al obtener los Blogs:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Blog.' });
    }
  };

  const getBlogById = async (id) => {
      const blog = await Blog.findById(id);

      // Verifica si el blog existe
      if (!blog) throw Error ( 'Blog no encontrado.' )
     
     
    return blog
    
  };

  const getBlogBySlug = async (req,res) => {
    const { slug } = req.params;
    try {
    
      const blog = await Blog.findOne({ urlSlug: slug }).exec();
  
       // Verifica si el blog existe
       if (!blog) {
        return res.status(404).json({ success: false, message: 'Blog no encontrado.' });
      }
      // Incrementa el número de vistas
      blog.vistas = (blog.vistas || 0) + 1;
      await blog.save();

      return res.status(200).json({ success: true, blog });
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el blog.' });
    }
  };
  
  
  const updateBlog = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el blog por ID
      const blog = await Blog.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el blog existe
      if (!blog) {
        return res.status(404).json({ success: false, message: 'Blog no encontrado.' });
      }
  
      return res.status(200).json({ success: true, blog });
    } catch (error) {
      console.error('Error al actualizar el blog:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el blog.' });
    }
  };

  const addComment = async (req, res) => {
    const { slug } = req.params;
    const { autor, contenido, respuestaA } = req.body;

    try {
        const blog = await Blog.findOne({ urlSlug: slug });

        if (!blog) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }

        const comentario = { autor, contenido };


        if (respuestaA) {
            // Agregar respuesta a un comentario específico
            const comentarioPadre = blog.comentarios.id(respuestaA);
            if (comentarioPadre) {
                comentarioPadre.respuestas.push(comentario);
            }
        } else {
            // Agregar comentario nuevo
            blog.comentarios.push(comentario);
        }

        await blog.save();
        res.status(200).json({ blog });
    } catch (error) {
        console.error('Error al agregar comentario:', error);
        res.status(500).json({ message: 'Error al agregar comentario' });
    }
};

const updateCommentLike = async (req, res) => {
  const { slug } = req.params; // Obtiene el 'slug' de la URL
  const { comentarioId, action } = req.body; // Obtiene 'comentarioId' y 'action' del cuerpo de la solicitud
  // Verifica que action esté correctamente definido
  if (!action || !action.type || !action.userId) {
    return res.status(400).json({ message: 'Acción o userId no proporcionado' });
  }

  try {
    // Buscar el blog por su URL slug
    const blog = await Blog.findOne({ urlSlug: slug });

    if (!blog) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }

    // Buscar el comentario en el blog
    let comentario = blog.comentarios.id(comentarioId);

    if (comentario) {
      await updateLikesAndDislikes(comentario, action);
      // Guardar los cambios en el documento del blog
      await blog.save();

      return res.status(200).json({ blog });
    } else {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar like/dislike:', error);
    res.status(500).json({ message: 'Error al actualizar like/dislike' });
  }
};


const updateLikesAndDislikes = (comentario, action) => {
;
  const {userId} = action
  if (!comentario) {
    throw new Error('Comentario no encontrado');
  }

  // Inicializa likes y dislikes si no existen
  comentario.likes = comentario.likes || { like: 0, userId: [] };
  comentario.dislikes = comentario.dislikes || { dislike: 0, userId: [] };

  switch (action.type) {
    case 'like':
      // Verifica si el userId ya está en el array de likes
      if (comentario.likes.userId.includes(userId)) {
        // Elimina el userId del array de likes y decrementa el contador de likes
        comentario.likes.userId = comentario.likes.userId.filter(id => id !== userId);
        comentario.likes.like -= 1;
      } else {
        // Agrega el userId al array de likes y aumenta el contador de likes
        comentario.likes.userId.push(userId);
        comentario.likes.like += 1;
        // Elimina el userId del array de dislikes si estaba presente
        if (comentario.dislikes.userId.includes(userId)) {
          comentario.dislikes.userId = comentario.dislikes.userId.filter(id => id !== userId);
          comentario.dislikes.dislike -= 1;
        }
      }
      break;

    case 'dislike':
      // Verifica si el userId ya está en el array de dislikes
      if (comentario.dislikes.userId.includes(userId)) {
        // Elimina el userId del array de dislikes y decrementa el contador de dislikes
        comentario.dislikes.userId = comentario.dislikes.userId.filter(id => id !== userId);
        comentario.dislikes.dislike -= 1;
      } else {
        // Agrega el userId al array de dislikes y aumenta el contador de dislikes
        comentario.dislikes.userId.push(userId);
        comentario.dislikes.dislike += 1;
        // Elimina el userId del array de likes si estaba presente
        if (comentario.likes.userId.includes(userId)) {
          comentario.likes.userId = comentario.likes.userId.filter(id => id !== userId);
          comentario.likes.like -= 1;
        }
      }
      break;

    default:
      throw new Error('Acción no válida');
  }
};

const findAndUpdateResponse = (respuestas, responseId, action) => {
  // Primero, intenta encontrar la respuesta en el nivel principal
console.log(responseId);

  
const response = respuestas.find(res => res._id.toString() === responseId.toString());
  console.log(response);
  
  if (response) {
    // Si la respuesta se encuentra, actualízala
    updateLikesAndDislikesResponse(response, action);
    return true;
  }

  // Si no se encuentra en el nivel principal, busca en las respuestas anidadas
  for (let res of respuestas) {
    if (res.respuestas && res.respuestas.length > 0) {
      const found = findAndUpdateResponse(res.respuestas, responseId, action);
      if (found) return true;
    }
  }

  // Si no se encuentra en ningún lugar, retorna false
  return false;
};


const updateCommentLikeResponse = async (req, res) => {
  const { slug } = req.params; // Obtiene el 'slug' de la URL
  const { comentarioId, responseId, action } = req.body; // Obtiene 'comentarioId', 'responseId' y 'action' del cuerpo de la solicitud

  // Verifica que action esté correctamente definido
  if (!action || !action.type || !action.userId) {
    return res.status(400).json({ message: 'Acción o userId no proporcionado' });
  }

  try {
    // Buscar el blog por su URL slug
    const blog = await Blog.findOne({ urlSlug: slug });

    if (!blog) {
      return res.status(404).json({ message: 'Blog no encontrado' });
    }

    // Buscar el comentario en el blog
    let comentario = blog.comentarios.id(comentarioId);

    if (comentario) {
      const responseFound = findAndUpdateResponse(comentario.respuestas, responseId, action);
      
      
      if (responseFound) {
        // Guardar los cambios en el documento del blog
        await blog.save();
        return res.status(200).json({ blog });
      } else {
        return res.status(404).json({ message: 'Respuesta no encontrada' });
      }
    } else {
      return res.status(404).json({ message: 'Comentario no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar like/dislike:', error);
    res.status(500).json({ message: 'Error al actualizar like/dislike' });
  }
};



const updateLikesAndDislikesResponse = (respuesta, action) => {
  console.log(respuesta);
  
  const { userId } = action;

  if (!respuesta) {
    throw new Error('Respuesta no encontrada');
  }

  // Inicializa likes y dislikes si no existen
  respuesta.likes = respuesta.likes || { like: 0, userId: [] };
  respuesta.dislikes = respuesta.dislikes || { dislike: 0, userId: [] };

  switch (action.type) {
    case 'like':
      // Verifica si el userId ya está en el array de likes
      if (respuesta.likes.userId.includes(userId)) {
        // Elimina el userId del array de likes y decrementa el contador de likes
        respuesta.likes.userId = respuesta.likes.userId.filter(id => id !== userId);
        respuesta.likes.like -= 1;
      } else {
        // Agrega el userId al array de likes y aumenta el contador de likes
        respuesta.likes.userId.push(userId);
        respuesta.likes.like += 1;
        // Elimina el userId del array de dislikes si estaba presente
        if (respuesta.dislikes.userId.includes(userId)) {
          respuesta.dislikes.userId = respuesta.dislikes.userId.filter(id => id !== userId);
          respuesta.dislikes.dislike -= 1;
        }
      }
      break;

    case 'dislike':
      // Verifica si el userId ya está en el array de dislikes
      if (respuesta.dislikes.userId.includes(userId)) {
        // Elimina el userId del array de dislikes y decrementa el contador de dislikes
        respuesta.dislikes.userId = respuesta.dislikes.userId.filter(id => id !== userId);
        respuesta.dislikes.dislike -= 1;
      } else {
        // Agrega el userId al array de dislikes y aumenta el contador de dislikes
        respuesta.dislikes.userId.push(userId);
        respuesta.dislikes.dislike += 1;
        // Elimina el userId del array de likes si estaba presente
        if (respuesta.likes.userId.includes(userId)) {
          respuesta.likes.userId = respuesta.likes.userId.filter(id => id !== userId);
          respuesta.likes.like -= 1;
        }
      }
      break;

    default:
      throw new Error('Acción no válida');
  }
};


const addReply = async (req, res) => {
  const { slug } = req.params;
  const { comentarioId, autor, contenido } = req.body;

  try {
      const blog = await Blog.findOne({ urlSlug: slug });

      if (!blog) {
          return res.status(404).json({ message: 'Blog no encontrado' });
      }

      const comentario = blog.comentarios.id(comentarioId);

      if (!comentario) {
          return res.status(404).json({ message: 'Comentario no encontrado' });
      }

      comentario.respuestas.push({ autor, contenido });

      await blog.save();
      res.status(200).json({ blog });
  } catch (error) {
      console.error('Error al agregar respuesta:', error);
      res.status(500).json({ message: 'Error al agregar respuesta' });
  }
};


  
  module.exports ={
    getAllBlog,
    getBlogById,
    updateBlog,
    getBlogBySlug,
    addComment,
    updateCommentLike,
    addReply, 
    updateCommentLikeResponse,
  }