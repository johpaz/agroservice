require('dotenv').config();
const Aseguradoras = require('../../models/aseguradorasModel');
const Role = require('../../models/roleModel');

const createAseguradora = async (
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
    const existingAseguradora = await Aseguradoras.findOne({ nit: nit });

    if (existingAseguradora) {
      return {
        success: false,
        message: 'La Aseguradora ya esta registrada.'
      };
    }

  
    // Crear un nuevo perfil con la contraseña hasheada y los nuevos campos
    const newAseguradora = new Aseguradoras({
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

    await newAseguradora.save();
    const userType = await Role.findOne({ _id: newAseguradora.role }) 
    return {
     session:newAseguradora, success:true,userType: userType.name 
    }
    
  } catch (error) {
    console.error('Error al crear la aseguradora:', error);
    return { success: false, message: 'Error al crear la aseguradora.' };
  }
};


module.exports = {
  createAseguradora,
};
