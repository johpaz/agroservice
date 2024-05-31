// rutas.js

const {Router}= require('express');

const {crearPublicacion,enviarOfertaAseguradora,enviarOfertaComprador,enviarOfertaTransportador} = require('../controllers/publicacion/publicacionController');
const {getAllPublicacion, deletePublicacion,updatePublicacion,getPublicacionById,getPublicacionByUser} = require('../controllers/publicacion/getPublicacion')

const ofertasRoutes = Router();
const ofertasConsultaRoutes = Router()


// Rutas para ofertas
ofertasRoutes.get('/', getAllPublicacion);
ofertasRoutes.get('/:id', getPublicacionById);
ofertasRoutes.put('/:id', updatePublicacion);
ofertasRoutes.post('/', crearPublicacion);
ofertasRoutes.delete('/:id', deletePublicacion);
ofertasRoutes.post('/:id/ofertas/compradores', enviarOfertaComprador);
ofertasRoutes.post('/:id/oferta/transportador', enviarOfertaTransportador);
ofertasRoutes.post('/:id/oferta/aseguradora', enviarOfertaAseguradora);
ofertasConsultaRoutes.post('/', getPublicacionByUser);

module.exports = {
    ofertasRoutes,
    ofertasConsultaRoutes
};
