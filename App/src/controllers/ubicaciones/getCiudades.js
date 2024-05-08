const Ciudad = require('../../models/ciudadModel')

const getCities = () => {
    const ciudades = Ciudad.find()
    console.log('ciudades', ciudades)
    return ciudades

}

module.exports = getCities