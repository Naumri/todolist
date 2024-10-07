import { FiGithub, FiLinkedin } from "react-icons/fi";

interface listProps {
  t: (key: string) => string;
}

function Footer({ t }: listProps) {
  return (
    <div className="px-8 py-8 absolute bottom-0 flex justify-between items-end w-full">
      <div className="text-sm">
        <p className="pt-2">
          <span className="font-poppins-semibold">{t("design")}</span> Arthur
          Justino
        </p>
        <p className="pt-2">
          <span className="font-poppins-semibold">{t("developed")}</span> Arthur
          Justino
        </p>
        <p className="pt-2">
          <span className="font-poppins-semibold">{t("question")}</span>{" "}
          <a href="#" className="text-cblue-100 hover:text-[#3BADCC] underline">
            {t("portfolio")}
          </a>
        </p>
      </div>
      <div className="flex">
        <a href="#">
          <FiGithub className="w-8 h-8 hover:text-cblue-100" />
        </a>
        <a href="#">
          <FiLinkedin className="w-8 h-8 ml-8 hover:text-cblue-100" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
