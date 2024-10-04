import Form from "./Form";
import List from "./List";
import { useState } from "react";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
}

function Todolist() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    setTasks(tasks);
  };

  return (
    <div className="bg-mblue-200 w-[600px] py-16 px-8 rounded-xl max-h-[755px] z-10">
      <Form fetchTasks={fetchTasks} />
      <List tasks={tasks} setTasks={setTasks} fetchTasks={fetchTasks} />
    </div>
  );
}

export default Todolist;
