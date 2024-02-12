const mongoose = require('mongoose');
const Productor = require('../../models/productoresModel'); 


const getAllProductor = async (req, res) => {

    try {
      // Obtiene todos los perfiles independientemente del tipo
      const productor = await Productor.find();
  
      return res.status(200).json(productor );
    } catch (error) {
      console.error('Error al obtener los Productores:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Productores.' });
    }
  };

  const getProductorById = async (req, res) => {
    const { id } = req.params;
      
    try {
    const productor = await Productor.findById(id);
    if(!productor){
      return res.status(404).json({ success: false, message: 'Productor no encontrado.' });
    }
    
    
  
    return res.status(200).json(productor );
  }catch (error) {
    console.error('Error al actualizar el Productor:', error);
    return res.status(500).json({ success: false, message: 'Error al actualizar el Productor.' });
  }
}
  
  const updateProductor = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const productor = await Productor.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Productor existe
      if (!productor) {
        return res.status(404).json({ success: false, message: 'Productor no encontrado.' });
      }
  
      return res.status(200).json({ success: true, productor });
    } catch (error) {
      console.error('Error al actualizar el Productor:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Productor.' });
    }
  };

  
  module.exports ={
    getAllProductor,
    getProductorById,
    updateProductor
  }