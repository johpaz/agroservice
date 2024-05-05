const mongoose = require('mongoose');
const Fincas = require('../../models/fincaModel'); 


const getAllFincas = async (req, res) => {

    try {
      // Obtiene todos los perfiles independientemente del tipo
      const Fincas = await Fincas.find();
  
      return res.status(200).json(Fincas );
    } catch (error) {
      console.error('Error al obtener los Fincas:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Fincas.' });
    }
  };

  const getFincasById = async (req, res) => {
    const { id } = req.params;
      
    try {
    const Fincas = await Fincas.findById(id);
    if(!Fincas){
      return res.status(404).json({ success: false, message: 'Finca no encontrada.' });
    }
    
    
  
    return res.status(200).json(Fincas );
  }catch (error) {
    console.error('Error al actualizar el Fincas:', error);
    return res.status(500).json({ success: false, message: 'Error al actualizar el Fincas.' });
  }
}
  
  const updateFincas = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const Fincas = await Fincas.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Fincas existe
      if (!Fincas) {
        return res.status(404).json({ success: false, message: 'Finca no encontrada.' });
      }
  
      return res.status(200).json({ success: true, Fincas });
    } catch (error) {
      console.error('Error al actualizar la Finca:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la Finca.' });
    }
  };

  
  module.exports ={
    getAllFincas,
    getFincasById,
    updateFincas
  }