const getUser = require('../controllers/userLogin/getUser')

const loginHandler = async (req, res) => {
    const {email, telefono} = req.body //params o body ?
    const credential = email ? email : telefono

    try {
        const user = await getUser(credential)

        if(user) {
            return res.status(200).json(user)
        }
        return res.status(204).json({success: false, message: 'Usuario no encontrado'})
    } catch (error) {
        console.log('Error al buscar el usuario', error)
        return res.status(404).json({message: 'Error al buscar el usuario'})
    }

}

module.exports= loginHandler 