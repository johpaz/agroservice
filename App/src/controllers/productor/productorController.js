require('dotenv').config();
const Productor = require('../../models/productoresModel');


const createProductor = async (
  nit,
  nombre,
  imagen,
  direccion,
  telefono,
  ciudad,
  departamento,
  ubicacion,
  email,
  password,
  role
  
  
) => {
  try {
    // Verificar si el usuario ya existe por su correo electrónico
    const existingProductor = await Productor.findOne({ nit:nit });
   
    if (existingProductor) {
      return {
        success: false,
        message: 'El Productor ya existe.'
      };
    }

    const newProductor = new Productor({
      nit: nit,
      nombre: nombre,
      imagen:imagen,
      direccion: direccion,
      telefono: telefono,
      ciudad: ciudad,
      departamento: departamento,
      ubicacion: ubicacion,
      email: email,
      password: password,
      role: role
    });
    console.log(newProductor);
    await newProductor.save();
    
    return {
      success: true,
      message: 'Productor creado exitosamente.'
    };
  } catch (error) {
    console.error('Error al crear el Productor:', error);
    return { success: false, message: 'Error al crear el Productor.' };
  }
};


module.exports = {
  createProductor,
};
