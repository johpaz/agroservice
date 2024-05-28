const mongoose = require('mongoose');
const Evento = require('../../models/eventosModel'); 


const getAllEvento = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const evento = await Evento.find();
  
      return res.status(200).json({ evento });
    } catch (error) {
      console.error('Error al obtener los Eventos:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Eventos.' });
    }
  };

  const getEventoById = async (id) => {
      const Evento = await Evento.findById(id);

      // Verifica si el Evento existe
      if (!Evento) throw Error ( 'Evento no encontrado.' )
     
     
    return Evento
    
  };
  
  const updateEvento = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el Evento por ID
      const Evento = await Evento.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Evento existe
      if (!Evento) {
        return res.status(404).json({ success: false, message: 'Evento no encontrado.' });
      }
  
      return res.status(200).json({ success: true, Evento });
    } catch (error) {
      console.error('Error al actualizar el Evento:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Evento.' });
    }
  };

  
  module.exports ={
    getAllEvento,
    getEventoById,
    updateEvento
  }