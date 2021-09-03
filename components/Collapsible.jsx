import { motion } from "framer-motion";
import { useState } from "react";

const menuVariants = {
  open: {
    maxHeight: "20rem",
    transition: {
      type: "linear",
      delayChildren: 0,
    },
  },
  closed: {
    maxHeight: "3.5rem",
    transition: {
      type: "linear",
      delayChildren: 0,
    },
  },
};

export default function Collapsible({ title, border, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={`overflow-hidden ${border ? "border-b border-black" : ""}`}
      layout
      transition="linear"
      initial="closed"
      variants={menuVariants}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.header
        layout
        className="flex items-center h-14"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2
          className="flex-grow uppercase text-4xl font-thin"
          style={{
            fontVariationSettings: "'wdth' 62",
          }}
        >
          {title}
        </h2>
        <motion.svg
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition="linear"
          layout
          width="27"
          height="29"
          viewBox="0 0 27 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 28.6985V1.19849M13.5 1.19849L1 13.6985M13.5 1.19849L26 13.6985"
            stroke="black"
          ></path>
        </motion.svg>
      </motion.header>

      <motion.div className="h-full" layout>
        <ul>
          {children.map((child, i) => (
            <li className="pb-2" key={i}>
              {child}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
