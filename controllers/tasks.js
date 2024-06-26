import Task from '../models/Task.js'
import CustomAPIError from '../errors/custom-api.js'

const getAllTasks = async (req, res) => {
  const tasks = await Task.find()
  res.status(200).json({ tasks, noHits: tasks.length })
}

const createTask = async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
}

const getTask = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    throw new CustomAPIError(`No task with id : ${taskID}`, 404)
  }

  res.status(200).json({ task })
}

const deleteTask = async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    throw new CustomAPIError(`No task with id : ${taskID}`, 404)
  }
  res.status(200).json({ task })
}

const editTask = async (req, res, next) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  })

  if (!task) {
    throw new CustomAPIError(`No task with id : ${taskID}`, 404)
  }

  res.status(200).json({ task })
}

export { getAllTasks, createTask, getTask, editTask, deleteTask }
