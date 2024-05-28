const Evento = require('../../models/eventosModel');

const createEvento = async ({
  titulo,
  detalle,
  fecha,
  urlLink,
  lugar,
  urlImage
}) => {
  console.log(titulo);
  try {
    // Verificar si el evento ya existe por su título
    const existingEvento = await Evento.findOne({ titulo: titulo });
    
    if (existingEvento) {
      return {
        success: false,
        message: 'El Evento con este título ya existe.'
      };
    }

    // Crear una nueva instancia del modelo Blog
    const newEvento = new Evento({
      titulo: titulo,
      detalle:detalle,
      fecha: fecha,
      urlLink : urlLink,
      lugar : lugar,
      urlImage: urlImage
    });
    
    // Guardar el nuevo blog en la base de datos
    await newEvento.save();
    
    return {
      success: true,
      newEvento
    };
    
  } catch (error) {
    console.error('Error al crear el Evento:', error);
    return { success: false, message: 'Error al crear el Evento.' };
  }
};

module.exports = {
  createEvento
};
