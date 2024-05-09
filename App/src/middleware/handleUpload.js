const multer = require('multer');

// configura el almacenamiento en la memoria del servidor para multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// middleware para manejar la carga del archivo
const handleUploadDepartamentos = upload.single('departamentos'); // el nombre del campo en el formulario del cliente
const handleUploadCiudades = upload.single('ciudades'); // el nombre del campo en el formulario del cliente

module.exports = {handleUploadDepartamentos, handleUploadCiudades};