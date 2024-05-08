const getCities = require('../controllers/ubicaciones/getCiudades')

const getCiudades = async (_req, res) => {
    try {
        const ciudades = await getCities()
        if(ciudades){
            return res.status(200).json(ciudades)
        } 
    } catch (error) {
        return res.status(404).json({error: 'Error al obtener las ciudades'})
    }
}

module.exports = getCiudades