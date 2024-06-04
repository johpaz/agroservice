const PedidoMarketplace = require('../../models/pedidoModel');

const crearPedido = async ({ pedido }) => {
  // Agrupar productos por vendedorId
  const pedidosPorVendedor = pedido.productos.reduce((acc, producto) => {
    const vendedorId = producto.vendedorId;
    if (!acc[vendedorId]) {
      acc[vendedorId] = [];
    }
    console.log(vendedorId);
    acc[vendedorId].push(producto);
    return acc;
  }, {});

  console.log('Pedidos agrupados por vendedor:', pedidosPorVendedor);

  // Crear y guardar un pedido por cada vendedorId
  const pedidos = await Promise.all(Object.keys(pedidosPorVendedor).map(async (vendedorId) => {
    // Calcular el total para el pedido
    const total = pedidosPorVendedor[vendedorId].reduce((acc, producto) => {
      return acc + (producto.amount * producto.precio);
    }, 0);

    const newPedido = new PedidoMarketplace({
      productos: pedidosPorVendedor[vendedorId], // Se asegura que no haya arrays anidados
      comprador: pedido.comprador,
      totalPedido:total  // Añadir el total calculado al pedido
    });
    const savedPedido = await newPedido.save();
    console.log('Pedido guardado:', savedPedido);
    return savedPedido;
  }));

  console.log('Todos los pedidos guardados:', pedidos);
  return pedidos;
};

module.exports = {
  crearPedido,
};
