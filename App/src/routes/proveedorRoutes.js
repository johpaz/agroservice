const {Router}= require('express');


const {getAllProveedor, getProveedorById, updateProveedor} = require('../controllers/proveedor/getProveedor');

const proveedorRouter = Router();

// Ruta para manejar la autenticación
// proveedorRouter.post('/', validateCreateAsegurador,handleCreateAsegurador);
proveedorRouter.get('/', getAllProveedor);
proveedorRouter.get('/:id',getProveedorById );
proveedorRouter.put('/:id', updateProveedor);

module.exports = proveedorRouter;
