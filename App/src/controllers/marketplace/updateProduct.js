const ProductoMarketplace = require("../../models/productoMarketplace");

const updateProduct = async (id, newData) => {
  const product = await ProductoMarketplace.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true, // asegura que se ejecuten las validaciones del esquema
    useFindAndModify: false, // usa findOneAndUpdate() en lugar de findAndModify()
  });
  
  return product;
};

module.exports = updateProduct;
