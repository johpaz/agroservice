const mongoose = require('mongoose');
const Comprador = require('../../models/compradorModel'); 


const getAllComprador = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const comprador = await Comprador.find();
  
      return res.status(200).json({ comprador });
    } catch (error) {
      console.error('Error al obtener los compradores:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los compradores.' });
    }
  };

  const getCompradorById = async (req, res) => {
    const { id  } = req.params
    // console.log("id", id)

    const comprador = await Comprador.findById(id);
    // console.log('comprador', comprador)
  
    if(!comprador) throw Error (`No existe una categoría de id: ${id}`);
  
    return res.status(200).json({ comprador });
  };
  
  
  const updateComprador = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const comprador = await Comprador.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el comprador existe
      if (!comprador) {
        return res.status(404).json({ success: false, message: 'comprador no encontrado.' });
      }
  
      return res.status(200).json({ success: true, comprador });
    } catch (error) {
      console.error('Error al actualizar el comprador:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el comprador.' });
    }
  };

  
  module.exports ={
    getAllComprador,
    getCompradorById,
    updateComprador
  }