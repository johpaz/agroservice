const mongoose = require('mongoose');
const Categoria = require('../../models/categoriaModel'); 


const getAllCategoria = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const categoria = await Categoria.find();
  
      return res.status(200).json({ categoria });
    } catch (error) {
      console.error('Error al obtener los Categoriaes:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Categoriaes.' });
    }
  };

  const getCategoriaById = async (id) => {

    const xategoria = await Categoria.findById(id);
  
    if(!categoria) throw Error (`No existe una categoría de id: ${id}`);
  
    return categoria;
  };
  
  
  const updateCategoria = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const categoria = await Categoria.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Categoria existe
      if (!categoria) {
        return res.status(404).json({ success: false, message: 'Categoria no encontrado.' });
      }
  
      return res.status(200).json({ success: true, categoria });
    } catch (error) {
      console.error('Error al actualizar el Categoria:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Categoria.' });
    }
  };

  
  module.exports ={
    getAllCategoria,
    getCategoriaById,
    updateCategoria
  }