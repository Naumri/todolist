import { LuSunMedium, LuMoon } from "react-icons/lu";
import { GoGear } from "react-icons/go";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";

interface listProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  changeLanguage: (lng?: string) => void;
  t: (key: string) => string;
  language: string;
}

function Header({
  setDarkMode,
  darkMode,
  changeLanguage,
  t,
  language,
}: listProps) {
  const [showConfig, setShowConfig] = useState<boolean>(false);
  return (
    <header className="my-8 mx-8 flex justify-between items-center">
      <h1 className="font-poppins-semibold">{t("header")}</h1>
      <div className="icons flex">
        {darkMode ? (
          <LuSunMedium
            className="w-8 h-8 hover:text-cblue-100 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        ) : (
          <LuMoon
            className="w-8 h-8 hover:text-cblue-100 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          />
        )}
        <div className="relative">
          <GoGear
            className="w-8 h-8 ml-8 hover:text-cblue-100 cursor-pointer"
            onClick={() => setShowConfig(!showConfig)}
          />
          {showConfig && (
            <div className="configs-box absolute right-[-8px] m-2 dark:bg-mblue-200 bg-white rounded-lg">
              <div className="languages flex justify-between">
                <div className="bg-cblue-100 p-4 rounded-l-lg">
                  <MdLanguage className="w-6 h-6 text-white" />
                </div>
                <div className="p-4 font-poppins-semibold">
                  <span
                    className={`cursor-pointer ${
                      language == "pt" ? "text-cblue-100" : "text-[#3497B2]"
                    }`}
                    onClick={() => changeLanguage("pt")}
                  >
                    Português
                  </span>
                  <span
                    className={`ml-4 cursor-pointer ${
                      language == "en" ? "text-cblue-100" : "text-[#3497B2]"
                    }`}
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
