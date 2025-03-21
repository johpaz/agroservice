const {getUser} = require('../controllers/userLogin/getUser')
const Role = require('../models/roleModel');

const loginHandler = async (req, res) => {
    const {email} = req.body;
    
        
    try {
        const user = await getUser(email)
        if(user) {
            const userType = await Role.findOne({ _id: user.role }) 
            return res.status(200).json({session:user,success:true, userType: userType.name || null})
        }
        return res.status(203).json({success: false, message: 'Usuario no encontrado'})
    } catch (error) {
        console.log('Error al buscar el usuario', error)
        return res.status(404).json({ message: 'Error al buscar el  Usuario'})
    }

}

module.exports= loginHandler 