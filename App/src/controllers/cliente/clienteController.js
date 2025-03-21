require('dotenv').config();
const Cliente = require('../../models/clienteModel');
const Role = require('../../models/roleModel');

const createCliente = async (
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
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingCliente = await Cliente.findOne({ nit: nit });

    if (existingCliente) {
      return {
        success: false,
        message: 'El Comprador ya esta registrado.'
      };
    }

    
    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newCliente = new Cliente({
      nit: nit,
      nombre:nombre,
      imagen:imagen,
      direccion:direccion,
      telefono:telefono,
      ciudad:ciudad,
      departamento:departamento,
      ubicacion:ubicacion,
      email:email,
      role:role
    });

    await newCliente.save();
    const userType = await Role.findOne({ _id: newCliente.role }) 
    return {
       session: newCliente,success:true,userType: userType.name 
    };
  } catch (error) {
    console.error('Error al crear el Comprador:', error);
    return { success: false, message: 'Error al crear el Comprador.' };
  }
};


module.exports = {
  createCliente,
};
