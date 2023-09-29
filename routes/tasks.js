import { Router } from "express";
const router = Router();

import controller from "../controllers/tasks.js";
const { getAllTasks, createTask, getTask, deleteTask, editTask } = controller;
import validationLayer from "./validation-layer/rule.js";

router
  .route("/")
  .get(getAllTasks)
  .post(validationLayer.createTaskValidation, createTask);
router
  .route("/:id")
  .get(validationLayer.getTaskValidation, getTask)
  .put(validationLayer.editTaskValidation, editTask)
  .delete(validationLayer.deleteTaskValidation, deleteTask);

export default router;
