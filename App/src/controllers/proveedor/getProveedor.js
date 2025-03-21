const mongoose = require('mongoose');
const Proveedor = require('../../models/proveedorModel');

const getAllProveedor = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const proveedores = await Proveedor.find();
  
      return res.status(200).json({ proveedores });
    } catch (error) {
      console.error('Error al obtener las proveedores:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener las proveedores.' });
    }
  };

  const getProveedorById = async (id) => {
      const proveedor = await Proveedor.findById(id);
    
      // Verifica si el proveedor existe
      if (!proveedor) throw Error ( 'proveedor no encontrado.' )
     
     
    return proveedor
    
  };
  
  const updateProveedor = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const proveedor = await Proveedor.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el cliente existe
      if (!proveedor) {
        return res.status(404).json({ success: false, message: 'proveedor no encontrado.' });
      }
  
      return res.status(200).json({ success: true, proveedor });
    } catch (error) {
      console.error('Error al actualizar la proveedor:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar la proveedor.' });
    }
  };

  
  module.exports ={
    getAllProveedor,
    getProveedorById,
    updateProveedor
  }