const mongoose = require('mongoose');
const dotenv = require("dotenv")

let connection; // Variable para almacenar la instancia de la conexión

function connectDB() {
  if (connection) {
    // Devolver la conexión existente si ya está establecida
    return connection;
  }

  mongoose.connect(process.env.MONGO_URL_ONLINE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection = mongoose.connection;

  connection.on('error', (error) => {
    console.error('MongoDB Connection Error:', error);
  });

  connection.once('open', () => {
    console.log('Connected to MongoDBAgroinsumos');
  });

  return connection;
}

module.exports = connectDB;
