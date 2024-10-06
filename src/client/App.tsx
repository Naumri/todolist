import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div
      className={`App h-screen w-screen overflow-hidden font-poppins text-black bg-[#ECF7FA] ${
        darkMode && "dark bg-mblue-100 text-white"
      } `}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="flex justify-center">
        <Todolist />
      </div>
      <Footer />
    </div>
  );
}

export default App;
