const Product = require('../../models/productoMarketplace')
const Comprador = require('../../models/compradorModel')
const Productor = require('../../models/productoresModel')
const Transportista = require('../../models/trasportadorModel')
const Asegurador = require('../../models/aseguradorasModel')


const createNewProduct = async ({producto}) => {
      
        const newProduct = new Product({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            precio: producto.precio,
            stock: producto.stock,
            vendedorId:producto.vendedorId
        })
        const savedProduct = await newProduct.save()
        
            return savedProduct
        
}

module.exports = createNewProduct