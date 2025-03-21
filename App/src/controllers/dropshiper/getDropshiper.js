const mongoose = require('mongoose');
const Dropshiper = require('../../models/dropshipperModel'); 


const getAllDropshiper = async (req, res) => {

    try {
      // Obtiene todos los perfiles independientemente del tipo
      const dropshiper = await Dropshiper.find();
  
      return res.status(200).json(dropshiper );
    } catch (error) {
      console.error('Error al obtener los dropshiperes:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Productores.' });
    }
  };
    const getDropshiperById = async (req, res) => {
    const { id } = req.params;
      
    try {
    const productor = await Dropshiper.findById(id);
    if(!productor){
      return res.status(404).json({ success: false, message: 'Productor no encontrado.' });
    }
    
    
  
    return res.status(200).json(productor );
  }catch (error) {
    console.error('Error al actualizar el Productor:', error);
    return res.status(500).json({ success: false, message: 'Error al actualizar el Productor.' });
  }
}
  
  const updateDropshiper = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const dropshiper = await Dropshiper.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el dropshiper existe
      if (!dropshiper) {
        return res.status(404).json({ success: false, message: 'dropshiper no encontrado.' });
      }
  
      return res.status(200).json({ success: true, dropshiper });
    } catch (error) {
      console.error('Error al actualizar el dropshiper:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el dropshiper.' });
    }
  };

  
  module.exports ={
    getAllDropshiper,
    getDropshiperById,
    updateDropshiper
  }