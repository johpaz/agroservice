const multer = require('multer');

// configura el almacenamiento en la memoria del servidor para multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// middleware para manejar la carga del archivo
const handleUpload = upload.single('CodigoDane'); // el nombre del campo en el formulario del cliente

module.exports = handleUpload;