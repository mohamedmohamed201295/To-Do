import { Router } from 'express'
const router = Router()

import {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  editTask
} from '../controllers/tasks.js'

import {
  createTaskValidation,
  getTaskValidation,
  editTaskValidation,
  deleteTaskValidation
} from './validation-layer/rule.js'

router.route('/').get(getAllTasks).post(createTaskValidation, createTask)
router
  .route('/:id')
  .get(getTaskValidation, getTask)
  .patch(editTaskValidation, editTask)
  .delete(deleteTaskValidation, deleteTask)

export default router
