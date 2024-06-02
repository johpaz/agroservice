const mongoose = require('mongoose');
const PedidoMarketplace = require('../../models/pedidoModel'); 


const getAllPedidos = async (req, res) => {

    try {
      // Obtiene todos los perfiles independientemente del tipo
      const pedido = await PedidoMarketplace.find();
       return res.status(200).json(pedido );
    } catch (error) {
      console.error('Error al obtener los Pedidos:', error);
      return res.status(500).json({ success: false, message: 'Error al obtener los Pedidos.' });
    }
  };

  const getPedidoById = async (req, res) => {
    const { id } = req.params;
    try {
    const pedido = await PedidoMarketplace.findById(id);
    if(!pedido){
      return res.status(404).json({ success: false, message: 'pedido no encontrado.' });
    }
    return res.status(200).json(pedido );
  }catch (error) {
    console.error('Error al actualizar el Pedido:', error);
    return res.status(500).json({ success: false, message: 'Error al actualizar el Pedido.' });
  }
}
  
  const updatePedido = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    
    try {
      // Encuentra y actualiza el cliente por ID
      const pedido = await PedidoMarketplace.findByIdAndUpdate(
        id,
        { $set: updatedData },
        { new: true, useFindAndModify: false }
      );
  
      // Verifica si el pedido existe
      if (!pedido) {
        return res.status(404).json({ success: false, message: 'pedido no encontrado.' });
      }
  
      return res.status(200).json({ success: true, pedido });
    } catch (error) {
      console.error('Error al actualizar el Pedido:', error);
      return res.status(500).json({ success: false, message: 'Error al actualizar el Pedido.' });
    }
  };

  
  module.exports ={
    getAllPedidos,
    getPedidoById,
    updatePedido
  }