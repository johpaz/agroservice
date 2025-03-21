const { createCliente } = require('../controllers/cliente/clienteController');


const handleCreateCliente = async (data) => {

  // Extraer datos del cuerpo de la solicitud
  const {
    nit,
    nombre,
    imagen,
    direccion,
    telefono,
    ciudad,
    departamento,
    ubicacion,
    email,
    role
  } = data;

  try {
    // Llamar a tu función para crear el perfil del Comprador
    const result = await createCliente(
      nit,
      nombre,
      imagen,
      direccion,
      telefono,
      ciudad,
      departamento,
      ubicacion,
      email,
      role
    );

    // Devolver una respuesta exitosa
    if(result) return result
    // return res.status(200).json(result);
  } catch (error) {
    console.error('Error al crear el perfil:', error);
    // Devolver una respuesta de error en caso de problemas al crear el perfil
    return { error };
  }
};


module.exports = {
  handleCreateCliente,
};
