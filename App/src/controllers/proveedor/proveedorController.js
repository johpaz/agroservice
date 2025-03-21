require('dotenv').config();
const Proveedor = require('../../models/proveedorModel');
const Role = require('../../models/roleModel');

const createProveedor = async (
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
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingProveedor = await Proveedor.findOne({ nit: nit });

    if (existingProveedor) {
      return {
        success: false,
        message: 'La Aseguradora ya esta registrada.'
      };
    }

  
    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newProveedor = new Proveedor({
      nit: nit,
      nombre:nombre,
      imagen:imagen,
      direccion:direccion,
      telefono:telefono,
      ciudad:ciudad,
      departamento:departamento,
      email:email,
      password:password,
      role:role
    });

    await newProveedor.save();
    const userType = await Role.findOne({ _id: newProveedor.role }) 
    return {
     session:newProveedor, success:true,userType: userType.name 
    }
    
  } catch (error) {
    console.error('Error al crear la aseguradora:', error);
    return { success: false, message: 'Error al crear la aseguradora.' };
  }
};


module.exports = {
  createProveedor,
};
