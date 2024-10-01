import { useEffect, useState } from "react";

interface ITask {
  id: number;
  text: string;
}

function List() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  });

  return (
    <div>
      <h2>TAREFAS</h2>
      {tasks.map((task) => (
        <div>
          <p>{task.text}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
