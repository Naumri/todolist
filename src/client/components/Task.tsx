import { useState } from "react";
import { MdModeEdit, MdDelete, MdDragIndicator } from "react-icons/md";
import { Draggable } from "@hello-pangea/dnd";
import { FaCheck as Checked } from "react-icons/fa";
import { FaCheck as EditCheck } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

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
  sortOrder: string;
}

function Task({ task, index, fetchTasks, t, sortOrder }: listProps) {
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
    if (!editText) return;
    if (editText.length >= 30) return;
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
    <Draggable
      isDragDisabled={sortOrder !== "noordered"}
      draggableId={task.id.toString()}
      index={index}
    >
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
              className="bg-cblue-100 py-3 px-4 flex justify-between items-center rounded-md"
            >
              <div className="flex items-center">
                <div>
                  <MdDragIndicator className="w-8 h-8 text-[#3497B2]" />
                </div>
                <div>
                  <MdModeEdit className="w-8 h-8 ml-2 text-white" />
                </div>
                <input
                  autoFocus
                  className="bg-cblue-100 ml-[9px] outline-0 text-white w-full"
                  type="text"
                  defaultValue={task.text}
                  onChange={(e) => {
                    setEditText(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center">
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    editTask(task.id);
                  }}
                >
                  <EditCheck className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={() => isEditing(task.id)}
                  className="ml-6 cursor-pointer"
                >
                  <IoMdClose className="w-8 h-8 text-white" />
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-between items-center px-2 min-[400px]:px-4 py-[11px] border border-[#8DE6FF] dark:border-cblue-200 rounded-md">
              <div className="flex items-center">
                <div>
                  <MdDragIndicator className="w-8 h-8 w-max-350:w-6 w-max-350:h-6 text-[#89ABB4] dark:text-[#16414D]" />
                </div>
                <label className="flex items-center cursor-pointer relative ml-2">
                  <input
                    checked={task.checked}
                    onChange={() => isChecked(task.id)}
                    type="checkbox"
                    className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border-2 border-cblue-100 checked:bg-cblue-100"
                    id="check1"
                  />
                  {task.checked && (
                    <span className="absolute text-white dark:text-mblue-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Checked />
                    </span>
                  )}
                </label>
                <span className="ml-4 w-max-600:text-sm w-max-350:text-xs break-words">
                  {task.text}
                </span>
              </div>
              <div className="flex items-center">
                <button
                  className="hover:text-cblue-100"
                  onClick={() => {
                    isEditing(task.id);
                  }}
                >
                  <MdModeEdit className="w-8 h-8 w-max-350:w-6 w-max-350:h-6" />
                </button>
                <button
                  className="hover:text-[#fc2121]"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  <MdDelete className="w-8 h-8 ml-6 w-max-350:ml-4 w-max-350:w-6 w-max-350:h-6" />
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
