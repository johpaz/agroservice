const mongoose = require('mongoose');
const Transportador = require('../../models/trasportadorModel');

const getAllTransportador = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const transportador = await Transportador.find();
  
      return res.status(200).json({ transportador });
    } catch (error) {
      console.error('Error al obtener los Transportadores:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Transportadores.' });
    }
  };

  const getTransportadorById = async (id) => {

    const transportador = await Transportador.findById(id);
  
    if(!transportador) throw Error (`No existe una categoría de id: ${id}`);
  
    return transportador;
  };
  
  
  const updateTransportador = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const transportador = await Transportador.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Transportador existe
      if (!transportador) {
        return res.status(404).json({ success: false, message: 'Transportador no encontrado.' });
      }
  
      return res.status(200).json({ success: true, transportador });
    } catch (error) {
      console.error('Error al actualizar el Transportador:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Transportador.' });
    }
  };

  
  module.exports ={
    getAllTransportador,
    getTransportadorById,
    updateTransportador
  }