import pkg from 'express-validator'
import validator from './validator.js'

const createTaskValidation = [
  pkg.body('name', 'Task name is required').trim().notEmpty(),
  validator
]

const getTaskValidation = [
  pkg.param('id', `No item found with this id`).isMongoId(),
  validator
]

const editTaskValidation = [
  pkg.param('id', `No item found with this id`).isMongoId(),
  pkg.body('name', 'Task name is required').trim().notEmpty(),
  validator
]

const deleteTaskValidation = [
  pkg.param('id', `No item found with this id`).isMongoId(),
  validator
]

export {
  createTaskValidation,
  getTaskValidation,
  editTaskValidation,
  deleteTaskValidation
}
