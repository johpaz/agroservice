const handlerCreateProduct = (req, res) => {
    const product = req.body
    console.log('product en habdler', product)
    try {
        res.status(200).json(product)
    } catch (error) {
        console.log('error', error.message)
       
    }
}

const getAllProducts = async (_req, res) => {
    try{
        // const productsMarketplace = 

    } catch (error) {
        console.log('error', error.message)
    }
}

module.exports =  handlerCreateProduct, getAllProducts 