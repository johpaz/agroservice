const ProductoMarketplace = require("../../models/productoMarketplace");


const getProductsByUserId = async (req,res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const productosByUser = await ProductoMarketplace.find({
             vendedorId: id 
      });
      
      if(!productosByUser){
        return res.status(404).json({ success: false, message: 'Productos no encontrado.' });
      }  
      return res.status(200).json(productosByUser);
    }catch (error) {
      console.error('Error al buscar el Productos:', error);
      return res.status(500).json({ success: false, message: 'Error al buscar el Productos.' });
    }
};

module.exports = getProductsByUserId;
