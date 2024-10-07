import { useState } from "react";
import { MdModeEdit, MdDelete, MdDragIndicator } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
import { FaCheck } from "react-icons/fa";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
  checked: boolean;
}

interface listProps {
  task: ITask;
  index: number;
  fetchTasks: () => Promise<void>;
  t: (key: string) => string;
}

function Task({ task, index, fetchTasks, t }: listProps) {
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

  const isChecked = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}/checked`, {
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
                <MdModeEdit className="w-8 h-8 text-white" />
                <input
                  autoFocus
                  className="bg-cblue-100 outline-0 ml-4 text-white"
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
                {t("edit-task")}
              </button>
            </form>
          ) : (
            <div className="flex justify-between items-center px-4 py-[11px] border border-[#8DE6FF] dark:border-cblue-200 rounded-md">
              <div className="flex items-center">
                <MdDragIndicator className="w-8 h-8 text-[#89ABB4] dark:text-cblue-200" />
                <label className="flex items-center cursor-pointer relative ml-2">
                  <input
                    checked={task.checked}
                    onChange={() => isChecked(task.id)}
                    type="checkbox"
                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border-2 border-cblue-100 checked:bg-cblue-100"
                    id="check1"
                  />
                  {task.checked && (
                    <span className="absolute text-white dark:text-mblue-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <FaCheck />
                    </span>
                  )}
                </label>
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
