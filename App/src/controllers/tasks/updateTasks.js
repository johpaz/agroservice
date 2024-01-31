const Task = require('../../models/taksModel');
const Status = require('../../models/statusModel');
const User = require('../../models/userModel');

const updateTaskStatus = async (req, res) => {
  try {
    const { taskId, user, newStatusId, assignedToId } = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { status: newStatusId, assignee: assignedToId, user:user },
      { new: true }
    );

    const taskHistory = await Task.findByIdAndUpdate(
      taskId,
      {
        $push: {
          history: {
            status: newStatusId,
            assignee: assignedToId,
            user: user
          },
        },
      },
      { new: true }
    );

    return res.status(200).json({ success: true, task, taskHistory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: 'Error en el servidor' });
  }
};


const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  updateTaskStatus,
  getAllTasks
};
