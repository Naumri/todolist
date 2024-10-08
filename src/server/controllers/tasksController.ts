import { Request, Response } from "express";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
  checked: boolean;
}

let tasks: ITask[] = [];

const getTasks = (req: Request, res: Response) => {
  res.status(200).json(tasks);
};

const addTask = (req: Request, res: Response) => {
  const task: ITask = {
    id: Date.now(),
    text: req.body.text,
    isEdit: false,
    checked: false,
  };
  tasks.push(task);

  res.status(201).json(task);
};

const reorder = (req: Request, res: Response) => {
  tasks = req.body.items;
  res.status(200).send();
};

const editTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.map((t) =>
    t.id === id ? { ...t, text: req.body.text, isEdit: !t.isEdit } : t
  );

  res.status(200).send();
};

const isEditing = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.map((t) => (t.id === id ? { ...t, isEdit: !t.isEdit } : t));

  res.status(200).send();
};

const isChecked = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t));

  res.status(200).send();
};

const deleteTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).send();
};

export {
  getTasks,
  addTask,
  deleteTask,
  isEditing,
  editTask,
  reorder,
  isChecked,
};
