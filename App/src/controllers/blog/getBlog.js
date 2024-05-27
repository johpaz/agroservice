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

  
  module.exports ={
    getAllBlog,
    getBlogById,
    updateBlog
  }