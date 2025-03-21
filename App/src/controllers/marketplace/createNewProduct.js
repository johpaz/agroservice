const Product = require('../../models/productoMarketplace')



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