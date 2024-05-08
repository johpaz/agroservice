const Departamento = require('../../models/departamentoModel')

const getDepartamentos = () => {
    const departamentos = Departamento.find()
    return departamentos
}

module.exports = getDepartamentos