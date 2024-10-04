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
    <div className="mt-24">
      <div className="flex items-center">
        <div className="w-[15px] h-1 bg-cblue-100"></div>
        <h2 className="ml-2 font-poppins-semibold">TAREFAS</h2>
        <span className="font-poppins-semibold text-cblue-100 ml-2">
          {tasks.length}
        </span>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task task={task} key={task.id} />)
      ) : (
        <p className="mt-4 text-[#CCC]">Nenhuma tarefa foi criada ainda.</p>
      )}
    </div>
  );
}

export default List;
