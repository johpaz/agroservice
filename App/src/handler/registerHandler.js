const { validationResult, body } = require("express-validator");
const { handleCreateProductor } = require("../handler/productorHandler");
const { handleCreateComprador } = require("../handler/compradorHandler");
const { handleCreateAsegurador } = require("../handler/aseguadorHandler");
const { handleCreateTransportador,} = require("../handler/transportadoraHandler");


const validateCreateUser = [
  body("nit").notEmpty().withMessage("El campo NIT es obligatorio."),
  body("nombre").notEmpty().withMessage("El campo nombre es obligatorio."),
  body("direccion")
    .notEmpty()
    .withMessage("El campo dirección es obligatorio."),
  body("telefono").notEmpty().withMessage("El campo teléfono es obligatorio."),
  body("ciudad").notEmpty().withMessage("El campo ciudad es obligatorio."),
  body("departamento")
    .notEmpty()
    .withMessage("El campo departamento es obligatorio."),
  body("email")
    .notEmpty()
    .withMessage("El campo email es obligatorio.")
    .isEmail()
    .withMessage(
      "El campo email debe ser una dirección de correo electrónico válida."
    ),
  //   body('password')
  //     .notEmpty().withMessage('El campo contraseña es obligatorio.')
  //     .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres.'),
  body("role").notEmpty().withMessage("El campo role es obligatorio."),
];

const handleRegister = async (req, res) => {
  const errors = validationResult(req);
  const data = req.body;
  let user;

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    if (data.role == "663908d920dc679dae2d35a6") {
      user = await handleCreateComprador(data);
    } else if (data.role == "6639090120dc679dae2d35ac") {
      user = await handleCreateTransportador(data);
    } else if (data.role == "663908cd20dc679dae2d35a3") {
      user = await handleCreateProductor(data);
    } else if (data.role == "663908f620dc679dae2d35a9") {
      user = await handleCreateAsegurador(data);
    } else {
      return res.status(400).json({ error: "Rol inválido" });
    }
    
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  validateCreateUser,
  handleRegister,
};
