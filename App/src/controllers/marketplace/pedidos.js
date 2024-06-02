const PedidoMarketplace = require('../../models/pedidoModel');


const crearPedido = async ({pedido}) => {
  
    const newPedido = new PedidoMarketplace({
        productos: pedido.productos,
        comprador: pedido.comprador,
    })
    const savedPedido = await newPedido.save()
     

    return savedPedido
}   


module.exports = {
  crearPedido,
};
