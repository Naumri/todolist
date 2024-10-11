import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

interface listProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
  sortOrder: string;
  t: (key: string) => string;
}

function FilterSort({
  setFilter,
  setSortOrder,
  filter,
  sortOrder,
  t,
}: listProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const options = [
    { value: "todas", label: t("alltasks") },
    { value: "feitas", label: t("done") },
    { value: "afazer", label: t("todo") },
  ];
  const optionsSort = [
    { value: "noordered", label: t("notordered") },
    { value: "az", label: "A - Z" },
    { value: "za", label: "Z - A" },
  ];

  return (
    <section className="filter-sort my-6 grid grid-cols-2 gap-2">
      <div
        className="border border-cblue-100 rounded-md flex justify-between items-center relative cursor-pointer px-2"
        ref={dropdownRef}
      >
        <div
          className="flex-grow bg-transparent outline-none py-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {options.find((option) => option.value === filter)?.label}
        </div>
        <IoIosArrowDown
          className={`cursor-pointer ${isOpen ? "rotate-180" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-mblue-200 border border-cblue-100 rounded-md shadow-md z-10">
            {options.map((option) => (
              <div
                key={option.value}
                className={`px-2 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-mblue-100 rounded-md ${
                  filter === option.value ? "font-poppins-semibold" : ""
                }`}
                onClick={() => {
                  setFilter(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="border border-cblue-100 rounded-md flex justify-between items-center px-2 relative cursor-pointer"
        ref={dropdownRef}
      >
        <div
          className="flex-grow bg-transparent outline-none py-3"
          onClick={() => setIsOpenSort(!isOpenSort)}
        >
          {optionsSort.find((option) => option.value === sortOrder)?.label}
        </div>
        <IoIosArrowDown
          className={`cursor-pointer ${isOpenSort ? "rotate-180" : ""}`}
          onClick={() => setIsOpenSort(!isOpenSort)}
        />

        {isOpenSort && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-mblue-200 border border-cblue-100 rounded-md shadow-md z-10">
            {optionsSort.map((option) => (
              <div
                key={option.value}
                className={`px-2 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-mblue-100 rounded-md ${
                  sortOrder === option.value ? "font-poppins-semibold" : ""
                }`}
                onClick={() => {
                  setSortOrder(option.value);
                  setIsOpenSort(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FilterSort;
