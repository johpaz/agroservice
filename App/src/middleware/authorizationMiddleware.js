// authorizationMiddleware.js
const { checkRolePermissions } = require('../helpers/permissionsHelper'); // Importa la función de verificación de permisos

const authorizationMiddleware = (requiredRoles) => {
  return async (req, res, next) => {
    const userRoles = req.user.roles; // Suponemos que el usuario tiene un campo "roles"
    
    // Verifica si el usuario tiene los roles requeridos
    const hasRequiredRoles = userRoles.some(role => requiredRoles.includes(role));
    
    if (!hasRequiredRoles) {
      return res.status(403).json({ success: false, message: 'No tienes permisos para acceder a esta ruta.' });
    }
   next(); // Si todo está bien, pasa al siguiente middleware o controlador
  };
};

module.exports = authorizationMiddleware;
