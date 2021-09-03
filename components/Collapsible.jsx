import { useState } from "react";

export default function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black">
      <header
        className="flex items-center h-14"
        onClick={() => setIsOpen(!isOpen)}>
        <h2 className="flex-grow font-medium uppercase text-3xl">
          {title}
        </h2>
        <svg
          className={`transition-transform transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="27"
          height="29"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 28.6985V1.19849M13.5 1.19849L1 13.6985M13.5 1.19849L26 13.6985"
            stroke="black"></path>
        </svg>
      </header>
      {isOpen && (
        <div className="h-full">
          <ul>
            {children.map((child, i) => (
              <li className="pb-2" key={i}>
                {child}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
