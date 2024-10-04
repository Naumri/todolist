import { useState } from "react";
import { MdModeEdit, MdDelete, MdDragIndicator } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
}

interface listProps {
  task: ITask;
  index: number;
  fetchTasks: () => Promise<void>;
}

function Task({ task, index, fetchTasks }: listProps) {
  const [editText, setEditText] = useState<string>(task.text);

  const deleteTask = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchTasks();
  };

  const editTask = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}/editext`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: editText }),
    });

    fetchTasks();
  };

  const isEditing = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    fetchTasks();
  };

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="mb-4"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {task.isEdit ? (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-cblue-100 w-full h-full py-2 flex justify-between rounded-md"
            >
              <div className="flex ml-4 items-center">
                <MdModeEdit className="w-8 h-8" />
                <input
                  autoFocus
                  className="bg-cblue-100 outline-0 ml-4"
                  type="text"
                  defaultValue={task.text}
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                />
              </div>
              <button
                className="bg-white text-[#3BADCC] font-poppins-semibold px-4 py-2 rounded-md mr-2 hover:bg-[#eee]"
                onClick={() => {
                  editTask(task.id);
                }}
              >
                EDITAR TAREFA
              </button>
            </form>
          ) : (
            <div className="flex justify-between items-center px-4 py-[11px] border border-cblue-200 rounded-md">
              <div className="flex items-center">
                <MdDragIndicator className="w-8 h-8 text-[#16414D]" />
                <span className="ml-4">{task.text}</span>
              </div>
              <div className="flex items-center">
                <button
                  className="hover:text-cblue-100"
                  onClick={() => {
                    isEditing(task.id);
                  }}
                >
                  <MdModeEdit className="w-8 h-8" />
                </button>
                <button
                  className="hover:text-[#fc2121]"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  <MdDelete className="w-8 h-8 ml-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
}

export default Task;
