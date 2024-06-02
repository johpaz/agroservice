const mongoose = require('mongoose');
const PedidoMarketplace = require('../../models/pedidoModel'); // Importa el modelo ClienteProfile si existe

const getPedidosByUserId = async (req, res) => {   
  const { id } = req.params;
  console.log(id);
  try {
    const pedidosByUser = await PedidoMarketplace.find({
      "productos": {
        $elemMatch: {
          $elemMatch: { vendedorId: id }
        }
      }
    });
    
    if(!pedidosByUser){
      return res.status(404).json({ success: false, message: 'Pedido no encontrado.' });
    }  
    return res.status(200).json(pedidosByUser);
  }catch (error) {
    console.error('Error al buscar el Pedido:', error);
    return res.status(500).json({ success: false, message: 'Error al buscar el Pedido.' });
  }
     
  };
   
  module.exports ={
    getPedidosByUserId,
  }