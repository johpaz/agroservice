const mongoose = require('mongoose');
const Cliente = require('../../models/clienteModel'); 


const getAllCliente = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const cliente = await Cliente.find();
  
      return res.status(200).json({ cliente });
    } catch (error) {
      console.error('Error al obtener los clientes:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los clientes.' });
    }
  };

  const getClienteById = async (req, res) => {
    const { id  } = req.params
    // console.log("id", id)

    const cliente = await Cliente.findById(id);
    // console.log('comprador', comprador)
  
    if(!cliente) throw Error (`No existe un cliente de id: ${id}`);
  
    return res.status(200).json({ cliente });
  };
  
  
  const updateCliente = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const cliente = await Cliente.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el comprador existe
      if (!cliente) {
        return res.status(404).json({ success: false, message: 'cliente no encontrado.' });
      }
  
      return res.status(200).json({ success: true, cliente });
    } catch (error) {
      console.error('Error al actualizar el ciente:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el cliente.' });
    }
  };

  
  module.exports ={
    getAllCliente,
    getClienteById,
    updateCliente
  }