const {Router}= require('express');
const {ubicacionesHandler } = require('../handler/ubicacionesHandler')
const handleUpload = require('../middleware/handleUpload')
const getCiudades = require('../handler/ciudadHandler')
const getDepartamentos = require('../handler/departamentosHandler')

const ubicacionesRouter = Router()

ubicacionesRouter.post('/', handleUpload, ubicacionesHandler)
ubicacionesRouter.get('/ciudades', getCiudades)
ubicacionesRouter.get('/departamentos', getDepartamentos)

module.exports = ubicacionesRouter