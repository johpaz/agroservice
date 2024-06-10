const mongoose = require('mongoose');
const Publicacion = require('../../models/publicacionModel'); 


const getAllPublicacion = async (req, res) => {
    try {
      
      const publicacion = await Publicacion.find();
  
      return res.status(200).json({ publicacion });
    } catch (error) {
      console.error('Error al obtener las Publicaciones:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener las Publicaciones.' });
    }
  };

  const getPublicacionById = async (id) => {

    const publicacion = await Publicacion.findById(id);
  
    if(!publicacion) throw Error (`No existe una publicacion de id: ${id}`);
  
    return publicacion;
  };
 
 
  const getPublicacionByUser = async (req, res) => {
    try {
      const { productorId } = req.body; // Obtener el ID del productor del cuerpo de la solicitud
      const publicaciones = await Publicacion.find({ productor: productorId });
      
      if (!publicaciones || publicaciones.length === 0) {
        return res.status(202).json(`No se encontraron publicaciones para el productor con ID: ${productorId}`);
      }
  
      return res.status(200).json(publicaciones);
    } catch (error) {
      console.error("Error al buscar publicaciones por productor:", error);
      return res.status(500).json("Error interno del servidor");
    }
  };
  
  
  const updatePublicacion = async (req, res) => {
    
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const publicacion = await Publicacion.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Publicacion existe
      if (!publicacion) {
        return res.status(202).json({ success: false, message: 'Publicacion no encontrado.' });
      }
  
      return res.status(200).json({ success: true, publicacion });
    } catch (error) {
      console.error('Error al actualizar la Publicacion:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la Publicacion.' });
    }
  };


  const deletePublicacion = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedPublicacion = await Publicacion.findByIdAndDelete(id);
  
      if (!deletedPublicacion) {
        return res.status(202).json({ message: 'Publicación no encontrada' });
      }
  
      res.status(200).json({ message: 'Publicación eliminada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la publicación', error });
    }
  };
  

  module.exports ={
    getAllPublicacion,
    getPublicacionById,
    updatePublicacion,
    getPublicacionByUser,
    deletePublicacion
  }