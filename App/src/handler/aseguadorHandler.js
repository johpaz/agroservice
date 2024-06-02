const { createAseguradora } = require('../controllers/aseguradores/aseguradoresController');


const handleCreateAsegurador = async (data) => {
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
    role
  } = data;

  try {
    // Llamar a tu función para crear el perfil del Asegurador
    const result = await createAseguradora(
      nit,
      nombre,
      imagen,
      direccion,
      telefono,
      ciudad,
      departamento,
      email,
      password,
      role
    );

    // Devolver una respuesta exitosa
    if(result) return result
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    // Devolver una respuesta de error en caso de problemas al crear el perfil
    return {error};
  }
};


module.exports = {
  handleCreateAsegurador,
};
