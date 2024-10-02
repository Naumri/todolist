import { useEffect, useState } from "react";
import Task from "./Task";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
}

function List() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  });

  return (
    <div>
      <h2>TAREFAS</h2>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
}

export default List;
