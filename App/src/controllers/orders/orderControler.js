const Order = require('../../models/orderModel');
const Status = require('../../models/statusModel');
const User = require('../../models/userModel');
const Tasks = require('../../models/taksModel')
const Client = require('../../models/clienteModel') 

const createOrder = async (req, res) => {
  try {
    // Obtener los datos del body
    const { clientId, items,user } = req.body;

    // Estado inicial (asumiré que el nombre del estado es 'En Orden CV')
    const initialStatus = await Status.findOne({ _id: '65b96efbb7fb21c88bedc787' });
    const coordinator = await User.findOne({ role: '65b85f6ca426dfd5f822c2a4' });
    const cliente = await Client.findOne({ _id: clientId });
    console.log(coordinator);
    // Crear la orden
    const order = new Order({
      client: cliente._id,
      items: items,
      user:user
      });

    // Guardar la orden en la base de datos
    const savedOrder = await order.save();

    const tasks = new Tasks({
        idClient:cliente._id,
        oc:savedOrder._id,
        title: `tarea ${cliente.name}`,
        description: `Orden de compra ${savedOrder._id}`,
        status: initialStatus._id,
        assignee: coordinator._id,
        user:user
      });
      // Guardar la orden en la base de datos
    
      const savedTask = await tasks.save();
      savedTask.history.push({ status: initialStatus._id, assignee:coordinator._id,user:user });
       await savedTask.save();
    return res.status(201).json({ success: true, order: savedOrder, tasks:savedTask });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Error en el servidor' });
  }
};

// Otras funciones del controlador (puedes agregar más según las necesidades)

module.exports = {
  createOrder,
  };
