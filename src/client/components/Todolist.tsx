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
    <div className="bg-white dark:bg-mblue-200 w-[600px] py-16 px-8 rounded-xl max-h-[755px] z-10 relative">
      <Form fetchTasks={fetchTasks} t={t} />
      <FilterSort
        setFilter={setFilter}
        setSortOrder={setSortOrder}
        filter={filter}
        sortOrder={sortOrder}
        t={t}
      />
      <List
        tasks={tasks}
        setTasks={setTasks}
        fetchTasks={fetchTasks}
        t={t}
        filter={filter}
        sortOrder={sortOrder}
      />
    </div>
  );
}

export default Todolist;
