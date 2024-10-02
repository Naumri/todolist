import express from "express";
import {
  getTasks,
  addTask,
  deleteTask,
  isEditing,
  editTask,
} from "./controllers/tasksController.js";

const routes = express.Router();

routes.get("/tasks", getTasks);
routes.post("/tasks", addTask);
routes.patch("/tasks/:id/editext", editTask);
routes.patch("/tasks/:id", isEditing);
routes.delete("/tasks/:id", deleteTask);

export default routes;
