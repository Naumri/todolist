import { useState } from "react";

interface ITask {
  id: number;
  text: string;
  isEdit: boolean;
}

interface listProps {
  task: ITask;
}

function Task({ task }: listProps) {
  const [editText, setEditText] = useState<string>(task.text);

  const deleteTask = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const editTask = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}/editext`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: editText }),
    });
  };

  const isEditing = (id: number) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      {task.isEdit ? (
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            defaultValue={task.text}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              editTask(task.id);
            }}
          >
            EDITAR TAREFA
          </button>
        </form>
      ) : (
        <div>
          <span>{task.text}</span>
          <button
            onClick={() => {
              isEditing(task.id);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
          >
            Deletar
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
