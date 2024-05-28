const createNewProduct = require('../controllers/marketplace/createNewProduct')
const Productomarketplace = require('../models/productoMarketplace')
const getProductsByUserId = require('../controllers/marketplace/getProductsByUserId')
const updateProduct = require('../controllers/marketplace/updateProduct')

const handlerCreateProduct = async (req, res) => {
    const {producto, userId} = req.body
    // console.log('product en habdler', producto, userId)
    try {
        const newProduct = await createNewProduct({producto, userId})
        res.status(200).json(newProduct)
    } catch (error) {
        console.log('error', error.message)
       res.status(400).json({error: error.message})
    }
}

const getAllProducts = async (req, res) => {
    try{
        const response = await Productomarketplace.find()
        console.log('response', response)
        res.status(200).json(response)

    } catch (error) {
        console.log('error', error.message)
        res.status(401).json({Error: 'No se pudieron cargar los productos.'})
    }
}


const getUserProducts = async (req, res) => {
    const {id} = req.params
    console.log('id', id)
    try{
        const response = await getProductsByUserId(id)
        // console.log('response', response)
        res.status(200).json(response)

    } catch (error) {
        console.log('error', error.message)
        res.status(401).json({Error: 'No se pudieron cargar los productos.'})
    }
}

const editProduct = async (req, res) => {
    const {id} = req.params //el id del producto
    const newData = req.body
    // console.log('data', newData)
    try {
        const response = await updateProduct(id, newData) //devolver el producto actualizado
        res.status(200).json(response)
    } catch (error) {
        console.log('error', error.message)
        res.status(401).json({Error: 'No se pudo actualizar el producto.'})
    }
}

module.exports =  {handlerCreateProduct, getAllProducts, getUserProducts, editProduct }