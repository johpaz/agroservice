const Ciudad = require('../../models/ciudadModel')

const getCities = () => {
    const ciudades = Ciudad.find()
    
    return ciudades

}

module.exports = getCities