const getDepartamento = require('../controllers/ubicaciones/getDepartamentos')


const getDepartamentos = async (_req, res) => {
    try {
        const departamentos = await getDepartamento()
        if(departamentos){
            return res.status(200).json(departamentos)
        } 
    } catch (error) {
        return res.status(404).json({error: 'Error al obtener los departamentos'})
    }
}

module.exports = getDepartamentos