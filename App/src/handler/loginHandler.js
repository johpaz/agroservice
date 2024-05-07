const getUser = require('../controllers/userLogin/getUser')

const loginHandler = async (req, res) => {
    console.log('reqlogin', req.body)
    const {email, telefono} = req.body //params o body ?
    const credential = email ? email : telefono

    try {
        const user = await getUser(credential)

        if(user) {
            return res.status(200).json(user)
        }
    } catch (error) {
        console.log('Error al buscar el usuario', error)
        return res.status(404).json({success: false, message: 'Usuario no encontrado'})
    }

}

module.exports= loginHandler 