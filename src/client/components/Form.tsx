import { useState } from "react";

interface listProps {
  fetchTasks: () => Promise<void>;
  t: (key: string) => string;
}

function Form({ fetchTasks, t }: listProps) {
  const [textTask, setTextTask] = useState<string>("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: textTask }),
    });

    setTextTask("");
    fetchTasks();
  };

  return (
    <div>
      <form method="POST" onSubmit={(e) => addTask(e)}>
        <h1 className="text-4xl text-center">{t("title")}</h1>
        <div className="w-full flex justify-between mt-6">
          <input
            placeholder={t("placeholder")}
            className="bg-white dark:bg-mblue-200 p-[13px] border-l-4 border-cblue-100 w-full outline-0"
            type="text"
            value={textTask}
            onChange={(e) => setTextTask(e.target.value)}
          />
          <input
            type="submit"
            value={t("btn-form")}
            className="bg-cblue-100 text-[#F1FCFF] hover:text-[#DDD ] dark:text-mblue-100 font-poppins-semibold text-xl px-8 rounded-md ml-3 cursor-pointer hover:bg-[#3BADCC]"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
