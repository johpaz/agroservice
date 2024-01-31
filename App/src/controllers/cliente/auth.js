const passport = require('passport');
const jwt = require('jsonwebtoken');
const ClienteProfile = require('../../models/clienteModel');


const generateAccessToken = (userId) => {
  const secretKey = process.env.JWT_SECRET_KEY || 'clave-secreta-del-token';
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
};

const authenticate = () => {
  return async (req, res, next) => {
    try {
      const user = await authenticateUser(req, res, next);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Credenciales inválidas',
        });
      }

      const userModel = getUserModel(user);
      const userData = await userModel.findOne({ _id: user._id });
      const accessToken = generateAccessToken(user._id);

      return res.status(200).json({
        success: true,
        id: user._id,
        accessToken,
        redirectPath: getRedirectPath(userModel),
        userType: getUserType(userModel),
        message: 'Sesión iniciada',
      });
    } catch (error) {
      console.error(error);

      // Log de errores o guardar en un sistema de registro de errores

      return res.status(500).json({ error: 'Error en el servidor' });
    }
  };
};

const authenticateUser = (req, res, next) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    })(req, res, next);
  });
};

const getUserModel = (user) => {
  return user instanceof AdminProfile ? AdminProfile : ClienteProfile;
};

const getRedirectPath = (userModel) => {
  return userModel === AdminProfile ? '/dashboardAdmin' : '/dashboardCliente';
};

const getUserType = (userModel) => {
  return userModel === AdminProfile ? 'Administrador' : 'Cliente';
};

module.exports = {
  authenticate,
};
