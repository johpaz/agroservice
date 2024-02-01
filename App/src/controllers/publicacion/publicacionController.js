const Publicacion = require('../../models/publicacionModel');

async function enviarOfertaComprador(req, res) {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    const { comprador, precioOferta } = req.body;

    publicacion.ofertasCompradores.push({ comprador, precioOferta });
    await publicacion.save();

    res.status(201).send(publicacion);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function enviarOfertaTransportador(req, res) {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    const { transportador, precioOferta } = req.body;

    publicacion.ofertaTransportador = { transportador, precioOferta };
    await publicacion.save();

    res.status(201).send(publicacion);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function enviarOfertaAseguradora(req, res) {
  try {
    const publicacion = await Publicacion.findById(req.params.id);
    const { aseguradora, precioOferta } = req.body;

    publicacion.ofertaAseguradora = { aseguradora, precioOferta };
    await publicacion.save();

    res.status(201).send(publicacion);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  enviarOfertaComprador,
  enviarOfertaTransportador,
  enviarOfertaAseguradora,
};
