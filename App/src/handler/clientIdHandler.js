const {getClienteById} = require('../controllers/cliente/getProfiles')

const getClientId = async (req,res) => {
    const { id } = req.params;
    console.log(id);
    try {
      const client = await getClienteById(id);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(404).json({error: error.message})
    }
  };

  module.exports = getClientId