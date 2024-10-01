import { Request, Response } from "express";

interface ITask {
  id: number;
  text: string;
}

let tasks: ITask[] = [];

const getTasks = (req: Request, res: Response) => {
  res.status(200).json(tasks);
};

const addTask = (req: Request, res: Response) => {
  const task: ITask = { id: Date.now(), text: req.body.text };
  tasks.push(task);

  res.status(201).json(task);
};

const deleteTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).send();
};

export { getTasks, addTask, deleteTask };
