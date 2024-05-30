const Product = require('../../models/productoMarketplace')
const Comprador = require('../../models/compradorModel')
const Productor = require('../../models/productoresModel')
const Transportista = require('../../models/trasportadorModel')
const Asegurador = require('../../models/aseguradorasModel')


const createNewProduct = async ({producto, userId}) => {
    console.log(producto, userId)
    
        const newProduct = new Product({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            precio: producto.precio,
            stock: producto.stock
        })
        const savedProduct = await newProduct.save()
        // console.log('savedprod', savedProduct)

         // Busca el usuario por su ID
         let user = await Comprador.findOne({_id: userId}) || 
                    await Productor.findOne({_id: userId}) || 
                    await Transportista.findOne({_id: userId}) || 
                    await Asegurador.findOne({_id: userId});
        
                    // console.log('user', user)

        if(user) {
            user.productosMarketplace = user.productosMarketplace || []
            user.productosMarketplace.push(savedProduct._id);
            await user.save()

            return savedProduct
        } else {
            return 'Usuario no encontrado.'
        }

}

module.exports = createNewProduct