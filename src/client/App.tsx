import Header from "./components/Header";
import Todolist from "./components/Todolist";
import Footer from "./components/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiHelpCircle } from "react-icons/fi";
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { GoGear } from "react-icons/go";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  return (
    <div
      className={`App font-poppins flex flex-col min-h-screen text-black bg-[#FFF] ${
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
      <div className="flex flex-grow justify-center w-full box-border">
        <Todolist t={t} />
      </div>
      <Footer t={t} />
      <div className="rounded-t-3xl w-min-600:hidden flex justify-center py-3 w-full bg-[#F8F8F8] dark:bg-mblue-200 fixed bottom-0 left-0 z-50">
        <FiHelpCircle className="w-8 h-8" />
        {darkMode ? (
          <LuSunMedium
            className="w-8 h-8 mx-16"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <LuMoon
            className="w-8 h-8 mx-16"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
        <GoGear className="w-8 h-8" />
      </div>
    </div>
  );
}

export default App;
