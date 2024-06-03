const mongoose = require('mongoose');
const PedidoMarketplace = require('../../models/pedidoModel');
const Ciudad = require('../../models/ciudadModel');
const Departamento = require('../../models/departamentoModel');

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
    
    if (pedidosByUser.length === 0) {
      return res.status(404).json({ success: false, message: 'No se encontraron pedidos para este usuario.' });
    }  

    // Mapear los ids de ciudad y departamento a sus nombres correspondientes
    const pedidosWithNames = await Promise.all(pedidosByUser.map(async (pedido) => {
      const ciudad = await Ciudad.findById(pedido.comprador.ciudad);
      const departamento = await Departamento.findById(pedido.comprador.departamento);
      
      return {
        ...pedido.toObject(),
        ciudad: ciudad ? ciudad.ciudad : 'Ciudad no encontrada',
        departamento: departamento ? departamento.departamento : 'Departamento no encontrado'
      };
    }));

    return res.status(200).json(pedidosWithNames);
  } catch (error) {
    console.error('Error al buscar el Pedido:', error);
    return res.status(500).json({ success: false, message: 'Error al buscar el Pedido.' });
  }
};

module.exports ={
  getPedidosByUserId,
};
