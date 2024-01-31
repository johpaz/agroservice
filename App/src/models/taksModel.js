const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  idClient:{ type: String, required: true },
  description: { type: String },
  status: { type: mongoose.Schema.Types.ObjectId, ref: 'Status', required: true },
  assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: String, required: true },
  history: [
    {
      status: { type: mongoose.Schema.Types.ObjectId, ref: 'Status', required: true },
      assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      createdAt: { type: Date, default: Date.now },
      user: { type: String, required: true },
    },
  ],
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
