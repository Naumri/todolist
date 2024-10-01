import { useEffect, useState } from "react";

interface ITask {
  id: number;
  text: string;
}

function List() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((response) => response.json())
      .then((tasks) => setTasks(tasks));
  });

  const deleteTask = (id: number) => {
    console.log(id);
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <h2>TAREFAS</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.text}</span>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            Deletar
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
