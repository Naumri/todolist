import express from "express";
import ViteExpress from "vite-express";

interface ITask {
  id: number;
  text: string;
}

const app = express();
app.use(express.json());

const tasks: ITask[] = [];

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/tasks", (req, res) => {
  const task: ITask = { id: Date.now(), text: req.body.text };
  tasks.push(task);

  res.status(201).json(task);
});

ViteExpress.listen(app, 3001, () => console.log("http://localhost:3001"));
