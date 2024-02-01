const mongoose = require('mongoose');
const Publicacion = require('../../models/publicacionModel'); 


const getAllPublicacion = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
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
        return res.status(404).json({ success: false, message: 'Publicacion no encontrado.' });
      }
  
      return res.status(200).json({ success: true, publicacion });
    } catch (error) {
      console.error('Error al actualizar la Publicacion:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la Publicacion.' });
    }
  };

  
  module.exports ={
    getAllPublicacion,
    getPublicacionById,
    updatePublicacion
  }