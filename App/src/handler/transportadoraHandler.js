const { createTransportador } = require('../controllers/transportadores/transportadoresController');


const handleCreateTransportador = async (data) => {

  // Extraer datos del cuerpo de la solicitud
  const {
    nit,
    nombre,
    imagen,
    direccion,
    telefono,
    ciudad,
    departamento,
    email,
    password,
    ubicacion,
    role
  } = data;

  try {
    // Llamar a tu función para crear el perfil del Transportador
    const result = await createTransportador(
      nit,
      nombre,
      imagen,
      direccion,
      telefono,
      ciudad,
      departamento,
      email,
      password,
      ubicacion,
      role
    );

    // Devolver una respuesta exitosa
   if(result) return result

  } catch (error) {
    console.error('Error al crear el perfil:', error);
    // Devolver una respuesta de error en caso de problemas al crear el perfil
    return {error}
  }
};


module.exports = { handleCreateTransportador }
