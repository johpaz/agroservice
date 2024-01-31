const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./src/models/userModel');

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user._id });
  });
});

passport.deserializeUser(async function(data, cb) {
  try {
    const user = await User.findById(data.id);
    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
});

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });

      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          return done(null, user); // Usuario autenticado
        } else {
          return done(null, false, { message: 'Contraseña incorrecta' });
        }
      }

      // Si no se encuentra el usuario
      return done(null, false, { message: 'Usuario no encontrado' });
    } catch (error) {
      return done(error);
    }
  }
));

module.exports = passport;
