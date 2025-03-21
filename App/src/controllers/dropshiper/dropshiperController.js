require('dotenv').config();
const Dropshipper = require('../../models/dropshipperModel');


const createDropshiper = async (
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
    const existingDropshiper = await Dropshipper.findOne({ nit:nit });
   
    if (existingDropshiper) {
      return {
        success: false,
        message: 'El Dropshiper ya esta registrado.'
      };
    }

    const newDropshipper = new Dropshipper({
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
    console.log(newDropshipper);
    await newDropshipper.save();
    
    return {
      success: true,
      message: 'Productor creado exitosamente.',
      user: newDropshipper
    };
  } catch (error) {
    console.error('Error al crear el Productor:', error);
    return { success: false, message: 'Error al crear el Productor.' };
  }
};


module.exports = {
  createDropshiper,
};
