import express from "express";
import {
  getTasks,
  addTask,
  deleteTask,
} from "./controllers/tasksController.js";

const routes = express.Router();

routes.get("/tasks", getTasks);
routes.post("/tasks", addTask);
routes.delete("/tasks/:id", deleteTask);

export default routes;
