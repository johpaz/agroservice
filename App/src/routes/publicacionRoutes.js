// rutas.js

const {Router}= require('express');

const {enviarOfertaAseguradora,enviarOfertaComprador,enviarOfertaTransportador} = require('../controllers/publicacion/publicacionController');

const ofertasRoutes = Router();
// Rutas para ofertas
ofertasRoutes.post('/:id/ofertas/compradores', enviarOfertaComprador);
ofertasRoutes.post('/:id/oferta/transportador', enviarOfertaTransportador);
ofertasRoutes.post('/:id/oferta/aseguradora', enviarOfertaAseguradora);

module.exports = ofertasRoutes;
