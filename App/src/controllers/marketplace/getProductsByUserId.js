const ProductoMarketplace = require("../../models/productoMarketplace");
const Comprador = require("../../models/compradorModel");
const Productor = require("../../models/productoresModel");
const Transportista = require("../../models/trasportadorModel");
const Asegurador = require("../../models/aseguradorasModel");

const getProductsByUserId = async (id) => {
  let user =
    (await Comprador.findOne({ _id: id })) ||
    (await Productor.findOne({ _id: id })) ||
    (await Transportista.findOne({ _id: id })) ||
    (await Asegurador.findOne({ _id: id }));

  if (!user) {
    console.log("Usuario no encontrado");
    return null;
  }

  const productsIds = user.productosMarketplace;
  const productsDetails = await ProductoMarketplace.find({
    _id: { $in: productsIds },
  });

//   console.log("products", productsDetails);

  return productsDetails;
};

module.exports = getProductsByUserId;
