const bcrypt = require('bcrypt');
const Cliente = require('../../models/clienteModel')

const actualizarContrasenaComoAdminHandler = async (req, res) => {
  const { userId, newPassword } = req.body;

  try {
    // Hash de la nueva contraseña antes de almacenarla
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Actualizar la contraseña en la base de datos (aquí asumimos que existe una función llamada actualizarContrasenaUsuario)
    await actualizarContrasenaUsuario(userId, hashedNewPassword);

    res.status(200).json({ message: 'Contraseña actualizada con éxito por el administrador' });
  } catch (error) {
    console.error('Error al actualizar la contraseña como administrador:', error);
    res.status(500).json({ error: 'Error al actualizar la contraseña como administrador' });
  }
};

const actualizarContrasenaUsuario = async (userId, hashedNewPassword) => {
  try {
    // Buscar al usuario por su ID
    const usuario = await Cliente.findById(userId);
    console.log(usuario);
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Actualizar la contraseña
    usuario.password = hashedNewPassword;

    // Guardar el usuario actualizado en la base de datos
    await usuario.save();
    
    console.log('Contraseña actualizada con éxito');

  } catch (error) {
    console.error('Error al actualizar la contraseña del usuario:', error);
    // Manejo del error
    throw error;
  }
};


module.exports = { actualizarContrasenaComoAdminHandler };
