import { LuSunMedium } from "react-icons/lu";
import { GoGear } from "react-icons/go";

function Header() {
  return (
    <header className="my-8 mx-8 flex justify-between items-center">
      <h1 className="font-poppins-semibold">LISTA DE TAREFAS</h1>
      <div className="icons flex">
        <LuSunMedium className="w-8 h-8 hover:text-cblue-100 cursor-pointer" />
        <GoGear className="w-8 h-8 ml-8 hover:text-cblue-100 cursor-pointer" />
      </div>
    </header>
  );
}

export default Header;
