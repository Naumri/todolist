import { useState } from "react";

function Form() {
  const [textTask, setTextTask] = useState<string>("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textTask }),
    }).then((response) => response.json());

    setTextTask("");
  };

  return (
    <div>
      <form method="POST" onSubmit={(e) => addTask(e)}>
        <h1>Quais são as tarefas de hoje?</h1>
        <input
          type="text"
          value={textTask}
          onChange={(e) => setTextTask(e.target.value)}
        />
        <input type="submit" value="CRIAR TAREFA" />
      </form>
    </div>
  );
}

export default Form;
