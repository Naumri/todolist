import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <div
      className={`App h-screen w-screen overflow-hidden font-poppins text-black bg-[#F8F8F8] ${
        darkMode && "dark bg-mblue-100 text-white"
      } `}
    >
      <Header
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        changeLanguage={changeLanguage}
        t={t}
        language={language}
      />
      <div className="flex justify-center">
        <Todolist t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}

export default App;
