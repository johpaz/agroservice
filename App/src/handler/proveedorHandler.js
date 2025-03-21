const {  createProveedor } = require('../controllers/proveedor/proveedorController');


const handleCreateProveedor = async (data) => {
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
    const result = await createProveedor(
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
  handleCreateProveedor,
};
