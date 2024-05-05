const validateLoginData = (req, res, next) => {
    const { email, password } = req.body;
    
  
    // Verifica que se proporcionen email y password en el cuerpo de la solicitud
    if (!email || !password) {
      return res.status(400).json({ error: 'Se requieren email y contraseña para iniciar sesión.' });
    }
  
    // Puedes agregar más validaciones según tus necesidades
  
    // Si todo está bien, pasa al siguiente middleware
    next();
  };
  
  
module.exports = {
    validateLoginData,
};
  