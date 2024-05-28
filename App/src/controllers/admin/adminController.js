const Admin = require('../../models/adminModel');

const createAdmin = async ({  
  nombre,
  email,
  role,
  image
}) => {
  console.log(nombre);
  try {
    // Verificar si el blog ya existe por su título
    const existingAdmin = await Admin.findOne({ email: email });
    
    if (existingAdmin) {
      return {
        success: false,
        message: 'El Blog con este título ya existe.'
      };
    }

    // Crear una nueva instancia del modelo Blog
    const newAdmin = new Admin({
      nombre:nombre,
      email:email,
      role:role,
      image:image
    });
    
    // Guardar el nuevo blog en la base de datos
    await newAdmin.save();
    
    return {
      success: true,
      newAdmin
    };
    
  } catch (error) {
    console.error('Error al crear el blog:', error);
    return { success: false, message: 'Error al crear el blog.' };
  }
};

module.exports = {
  createAdmin
};
