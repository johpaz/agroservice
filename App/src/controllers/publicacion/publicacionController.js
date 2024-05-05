const Publicacion = require('../../models/publicacionModel');

async function crearPublicacion(req, res) {
  try {
    const {
      productorId,
      producto,
      cantidad,
      fechaCosecha,
      imagen,
      precioPorUnidad,
      unidadMedida,
      fincas
    } = req.body;

    // Crear una instancia de Publicacion con los datos recibidos
    const publicacion = new Publicacion({
      productor: productorId,
      producto,
      cantidad,
      fechaCosecha,
      imagen,
      precioPorUnidad,
      unidadMedida,
      fincas
    });

    // Guardar la instancia de Publicacion en la base de datos
    await publicacion.save();

    // Enviar respuesta con el estado 201 y la publicación creada
    res.status(201).send(publicacion);
  } catch (error) {
    // En caso de error, enviar una respuesta con el estado 400 y el error
    res.status(400).send(error);
  }
}


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
  crearPublicacion
};
