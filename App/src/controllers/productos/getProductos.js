const mongoose = require('mongoose');
const Productos = require('../../models/productosModel'); 


const getAllProductos = async (req, res) => {
    try {
      // Obtiene todos los perfiles independientemente del tipo
      const productos = await Productos.find();
  
      return res.status(200).json({ productos });
    } catch (error) {
      console.error('Error al obtener los Productoses:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Productoses.' });
    }
  };

  const getProductosById = async (req,res) => {
    const { id } = req.params;  
    
    try {
      // Encuentra y actualiza el cliente por ID
      const productos = await Productos.findById(id);
  
      // Verifica si el Productos existe
      if (!productos) {
        return res.status(202).json({ success: false, message: 'Productos no encontrado.' });
      }
  
      return res.status(200).json({ success: true, productos });
    } catch (error) {
      console.error('Error al actualizar el Productos:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Productos.' });
    }
  };
  
  
  const updateProductos = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    console.log(id);
    try {
      // Encuentra y actualiza el cliente por ID
      const productos = await Productos.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el Productos existe
      if (!productos) {
        return res.status(202).json({ success: false, message: 'Productos no encontrado.' });
      }
  
      return res.status(200).json({ success: true, productos });
    } catch (error) {
      console.error('Error al actualizar el Productos:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Productos.' });
    }
  };

  
  module.exports ={
    getAllProductos,
    getProductosById,
    updateProductos
  }