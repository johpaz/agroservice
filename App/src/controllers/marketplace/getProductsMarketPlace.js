const ProductoMarketplace = require("../../models/productoMarketplace");
const Comprador = require("../../models/compradorModel");
const Productor = require("../../models/productoresModel");
const Transportista = require("../../models/trasportadorModel");
const Asegurador = require("../../models/aseguradorasModel");

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

  try {
    const deletedPublicacion = await ProductoMarketplace.findByIdAndDelete(id);

    if (!deletedPublicacion) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }

    res.status(200).json({ message: 'Publicación eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la publicación', error });
  }
};

module.exports = {
  getProductsById,
  deleteProductoMarketPlace
};
