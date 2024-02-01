// rutas.js

const {Router}= require('express');

const {enviarOfertaAseguradora,enviarOfertaComprador,enviarOfertaTransportador} = require('../controllers/publicacion/publicacionController');
const {getAllPublicacion,updatePublicacion,getPublicacionById} = require('../controllers/publicacion/getPublicacion')

const ofertasRoutes = Router();
// Rutas para ofertas
ofertasRoutes.get('/', getAllPublicacion);
ofertasRoutes.get('/', getPublicacionById);
ofertasRoutes.put('/:id', updatePublicacion);
ofertasRoutes.post('/:id/ofertas/compradores', enviarOfertaComprador);
ofertasRoutes.post('/:id/oferta/transportador', enviarOfertaTransportador);
ofertasRoutes.post('/:id/oferta/aseguradora', enviarOfertaAseguradora);

module.exports = ofertasRoutes;
