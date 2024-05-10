const getUser = require('../controllers/userLogin/getUser')
const Role = require('../models/roleModel');

const loginHandler = async (req, res) => {
    const {email, telefono} = req.body //params o body ?
    const credential = email ? email : telefono

    try {
        const user = await getUser(credential)
        
        const userType = await Role.findOne({ _id: user.role });
        
        if(user) {
            return res.status(200).json({session:user,success:true, userType: userType.name })
        }
        return res.status(204).json({success: false, message: 'Usuario no encontrado'})
    } catch (error) {
        console.log('Error al buscar el usuario', error)
        return res.status(404).json({ message: 'Error al buscar el  Usuario'})
    }

}

module.exports= loginHandler 