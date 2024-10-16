import Form from "./Form";
import List from "./List";
import { useState } from "react";
import FilterSort from "./FilterSort";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
  checked: boolean;
}

interface listProps {
  t: (key: string) => string;
}

function Todolist({ t }: listProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filter, setFilter] = useState<string>("todas");
  const [sortOrder, setSortOrder] = useState<string>("noordered");

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const tasks = await response.json();
    setTasks(tasks);
  };

  return (
    <div className="bg-transparent flex flex-col w-[600px] h-full pt-16 w-max-350:pt-8 px-6 w-max-600:px-4 w-max-350:px-2 rounded-xl z-10 relative">
      <Form fetchTasks={fetchTasks} t={t} />
      <List
        tasks={tasks}
        setTasks={setTasks}
        fetchTasks={fetchTasks}
        t={t}
        filter={filter}
        sortOrder={sortOrder}
        setFilter={setFilter}
        setSortOrder={setSortOrder}
      />
    </div>
  );
}

export default Todolist;
