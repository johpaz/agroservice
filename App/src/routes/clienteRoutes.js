const {Router}= require('express');


const {getAllClientes } = require('../controllers/cliente/getProfiles'); 
const getClientId = require('../handler/clientIdHandler')
const {uploadHandlerClient,handleUploadClient}  = require('../handler/crearClienteMasivo')
const {updateCliente} = require('../controllers/cliente/getProfiles')
const {actualizarContrasenaComoAdminHandler} = require('../controllers/cliente/cambioPassword')


const clienteRouter = Router();
const clienteIdRouter = Router();
const clienteMasivoRouter = Router();
const updateClienteIdRouter = Router();
const clienteNewPassword = Router();

// Ruta para manejar la autenticación

clienteNewPassword.put('/', actualizarContrasenaComoAdminHandler)
clienteMasivoRouter.post('/', handleUploadClient,uploadHandlerClient)
clienteRouter.get('/', getAllClientes)
updateClienteIdRouter.put('/:id', updateCliente)
clienteIdRouter.get('/:id', getClientId)



module.exports = {
    clienteRouter,
    clienteIdRouter,
    clienteMasivoRouter,
    updateClienteIdRouter,
    clienteNewPassword

 };
