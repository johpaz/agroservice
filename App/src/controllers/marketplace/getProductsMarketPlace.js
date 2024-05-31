const ProductoMarketplace = require("../../models/productoMarketplace");

const getProductsById = async (req,res) => {
  
  const { id } = req.params;  
    console.log(id);
  try {
    // Encuentra y actualiza el cliente por ID
    const productsDetails = await ProductoMarketplace.findById(id);

    // Verifica si el Productos existe
    if (!productsDetails) {
      return res.status(404).json({ success: false, message: 'Productos no encontrado.' });
    }

    return res.status(200).json({ success: true, productsDetails });
  } catch (error) {
    console.error('Error al encontrar el Productos:', error);
    return res.status(500).json({ success: false, message: 'Error al actualizar el Productos.' });
  }
};
const deleteProductoMarketPlace = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deletedProductoMarket = await ProductoMarketplace.findByIdAndDelete(id)
    if (!deletedProductoMarket) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la Producto', error });
  }
};

module.exports = {
  getProductsById,
  deleteProductoMarketPlace
};
