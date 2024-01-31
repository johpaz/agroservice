const mongoose = require('mongoose');
const ClienteProfile = require('../../models/clienteModel'); // Importa el modelo ClienteProfile si existe


const getAllClientes = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const clientes = await ClienteProfile.find();
  
      return res.status(200).json({ clientes });
    } catch (error) {
      console.error('Error al obtener los perfiles:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los perfiles.' });
    }
  };

  const getCategoryById = async (id) => {

    const category = await Category.findByPk(id,{include:{
      model: Ocupation,
      attributes: ['id','name'],
    }});
  
    if(!category) throw Error (`No existe una categoría de id: ${id}`);
  
    return category;
  };
  
  
  const getClienteById = async (id) => {
      const cliente = await ClienteProfile.findById(id);
    
      // Verifica si el cliente existe
      if (!cliente) throw Error ( 'Cliente no encontrado.' )
     
     
    return cliente
    
  };
  
  const updateCliente = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const cliente = await ClienteProfile.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el cliente existe
      if (!cliente) {
        return res.status(404).json({ success: false, message: 'Cliente no encontrado.' });
      }
  
      return res.status(200).json({ success: true, cliente });
    } catch (error) {
      console.error('Error al actualizar el cliente:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el cliente.' });
    }
  };

  
  module.exports ={
    getAllClientes,
    getClienteById,
    updateCliente
  }