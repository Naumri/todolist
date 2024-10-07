import { useEffect } from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
  checked: boolean;
}

interface listProps {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  fetchTasks: () => Promise<void>;
  t: (key: string) => string;
}

function List({ tasks, setTasks, fetchTasks, t }: listProps) {
  useEffect(() => {
    fetchTasks();
  }, []);

  function reorder<T>(list: T[], start: number, end: number) {
    const result = Array.from(list);
    const [removed] = result.splice(start, 1);
    result.splice(end, 0, removed);

    return result;
  }

  const dragEnd = async (result: any) => {
    if (!result.destination) return;
    const items = reorder(tasks, result.source.index, result.destination.index);
    setTasks(items);

    await fetch("http://localhost:3000/tasks/reorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    });
  };

  return (
    <div className="mt-24">
      <div className="flex items-center">
        <div className="w-[15px] h-1 bg-cblue-100"></div>
        <h2 className="ml-2 font-poppins-semibold">{t("tasks-title")}</h2>
        <span className="font-poppins-semibold text-cblue-100 ml-2">
          {tasks.length}
        </span>
      </div>
      <div className="list mt-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cblue-100 scrollbar-track-transparent">
        <DragDropContext onDragEnd={dragEnd}>
          <Droppable droppableId="tasks" type="list" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="pr-1"
              >
                {tasks.length > 0 ? (
                  tasks.map((task, index) => (
                    <Task
                      task={task}
                      key={task.id}
                      index={index}
                      fetchTasks={fetchTasks}
                      t={t}
                    />
                  ))
                ) : (
                  <p className="mt-4 dark:text-[#CCC] text-[#999]">
                    {t("no-tasks")}
                  </p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default List;
