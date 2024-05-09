const {Router}= require('express');
const {departamentosHandler } = require('../handler/departamentosUploadHandler')
const {handleUploadDepartamentos,handleUploadCiudades} = require('../middleware/handleUpload')
const getCiudades = require('../handler/ciudadHandler')
const getDepartamentos = require('../handler/departamentosHandler')
const {ciudadesuploadHandler } = require('../handler/ciudadesuploadHandler')

const ubicacionesRouter = Router()
const ciudadesRouter = Router()

ubicacionesRouter.post('/', handleUploadDepartamentos, departamentosHandler)
ciudadesRouter.post('/', handleUploadCiudades, ciudadesuploadHandler)
ubicacionesRouter.get('/ciudades', getCiudades)
ubicacionesRouter.get('/departamentos', getDepartamentos)

module.exports = {ubicacionesRouter,ciudadesRouter}