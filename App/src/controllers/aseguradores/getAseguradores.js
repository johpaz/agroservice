const mongoose = require('mongoose');
const Aseguradoras = require('../../models/aseguradorasModel'); // Importa el modelo ClienteProfile si existe


const getAllAseguradora = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const aseguradoras = await Aseguradoras.find();
  
      return res.status(200).json({ aseguradoras });
    } catch (error) {
      console.error('Error al obtener las aseguradoras:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener las aseguradoras.' });
    }
  };

  const getAseguradoraById = async (id) => {
      const aseguradora = await Aseguradoras.findById(id);
    
      // Verifica si el aseguradora existe
      if (!aseguradora) throw Error ( 'Aseguradora no encontrado.' )
     
     
    return aseguradora
    
  };
  
  const updateAseguradora = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const aseguradora = await Aseguradoras.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el cliente existe
      if (!aseguradora) {
        return res.status(404).json({ success: false, message: 'Aseguradora no encontrado.' });
      }
  
      return res.status(200).json({ success: true, cliente });
    } catch (error) {
      console.error('Error al actualizar la aseguradora:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la aseguradora.' });
    }
  };

  
  module.exports ={
    getAllAseguradora,
    getAseguradoraById,
    updateAseguradora
  }