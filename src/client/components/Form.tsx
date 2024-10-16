import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

interface listProps {
  fetchTasks: () => Promise<void>;
  t: (key: string) => string;
}

function Form({ fetchTasks, t }: listProps) {
  const [textTask, setTextTask] = useState<string>("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!textTask) return;
    if (textTask.length >= 30) return;
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
        <h1 className="text-4xl font-poppins-semibold text-center w-max-600:text-left leading-none w-max-600:leading-[48px] w-max-350:text-2xl">
          {t("title")}
        </h1>
        <div className="w-full flex flex-row justify-between mt-6">
          <input
            placeholder={t("placeholder")}
            className="bg-transparent flex flex-grow p-[13px] border-l-4 border-cblue-100 outline-0 w-max-350:text-xs"
            type="text"
            value={textTask}
            onChange={(e) => setTextTask(e.target.value)}
          />
          <input
            type="submit"
            value={t("btn-form")}
            className="bg-cblue-100 text-[#F1FCFF] hover:text-[#DDD] dark:text-mblue-100 font-poppins-semibold text-xl px-8 rounded-md ml-3 cursor-pointer hover:bg-[#3BADCC] mt-0 py-0 w-max-600:hidden"
          />
          <input
            type="submit"
            value="+"
            className="w-[50px] text-5xl rounded-xl bg-cblue-100 text-[#F1FCFF] hover:text-[#DDD] dark:text-mblue-100 w-min-600:hidden"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
