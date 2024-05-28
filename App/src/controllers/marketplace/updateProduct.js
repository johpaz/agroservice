const ProductoMarketplace = require("../../models/productoMarketplace");


const updateProduct = async (id, newData) => {
    const product = await ProductoMarketplace.findByIdAndUpdate(id, newData, {
        new: true,
      });
    //   console.log('product actualizado', product)
      return product
    }

module.exports= updateProduct