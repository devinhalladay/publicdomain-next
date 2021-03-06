import { useState } from "react";
import Collapsible from "./Collapsible";
import Image from "next/image";
import { List, MagnifyingGlass } from "phosphor-react";
import { motion } from "framer-motion";

const menuVariants = {
  open: { height: "30rem", right: "10vw" },
  closed: { height: "42px", right: "70vw" },
};

export default function GlobalHeader(props) {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  const [menuHeight, setMenuHeight] = useState("3rem");

  return (
    <motion.header
      layout
      variants={menuVariants}
      transition="linear"
      className={
        "z-50 fixed overflow-hidden left-3 top-3 px-2 bg-white border border-black"
      }
      initial="closed"
      animate={isMenuVisible ? "open" : "closed"}
    >
      <motion.div
        layout="position"
        className={`breadcrumbs  flex items-center h-10 ${
          isMenuVisible ? "border-b border-black" : ""
        }`}
      >
        <div
          onClick={() => toggleMenuVisibility(!isMenuVisible)}
          className="flex transition-all rounded-sm hover:bg-gray-200 hover:p-1 mr-2"
        >
          <List size={24} />
        </div>
        <div className="flex transition-all rounded-sm hover:bg-gray-200 hover:p-1 mr-4">
          <MagnifyingGlass size={24} />
        </div>

        <nav ariaLabel="Main Navigation" className="">
          <ul className="list-none flex">
            <li className="inline-block flex items-center mr-1">
              <a
                href=""
                className=" transition-all rounded-sm no-underline mr-1 hover:bg-gray-200 hover:p-1"
              >
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="96 48 176 128 96 208"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </li>
            <li className="font-semibold inline-block flex items-center">
              <a
                href=""
                className="transition-all rounded-sm no-underline mr-1 hover:bg-gray-200 hover:p-1"
              >
                Investigate
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
      {isMenuVisible && (
        <motion.div
          layout="position"
          className="pt-3 grid grid-cols-12 gap-5 pb-3"
        >
          <nav className="col-span-5">
            <Collapsible title="Investigate" border>
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
            <Collapsible title="Participate">
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
          </nav>
          <div className="col-span-6 col-start-7">
            <a href="" className="flex mb-4">
              <div className="w-56 h-40 inline-block relative">
                <Image
                  src="https://source.unsplash.com/random"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="inline-block pl-4 text-2xl">Example Article</p>
            </a>
            <a href="" className="flex">
              <div className="w-56 h-40 inline-block relative">
                <Image
                  src="https://source.unsplash.com/random"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="inline-block pl-4 text-2xl">Example Article</p>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
