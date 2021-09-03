import { useState } from "react";
import Collapsible from "./Collapsible";
import Image from "next/image";
import { List, MagnifyingGlass } from "phosphor-react";

export default function GlobalHeader(props) {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  return (
    <header
      className={`z-50 fixed transition-all duration-500 ease-in max-w-4xl overflow-hidden left-3 top-3 px-2 bg-white max-h-12 border border-black shadow-md ${
        isMenuVisible
          ? "right-64 max-h-96 max-w-7xl transition-all duration-500 ease-out"
          : ""
      }`}
    >
      <div
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
      </div>
      {isMenuVisible && (
        <div className="grid grid-cols-12 gap-5 pb-3">
          <nav className="col-span-6">
            <Collapsible title="Investigate" border>
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
            <Collapsible title="Participate">
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
          </nav>
          <div className="col-span-5 col-start-8">
            <a href="" className="flex">
              <div className="w-44 h-32 inline-block relative">
                <Image
                  src="https://source.unsplash.com/random"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="inline-block pl-4 text-2xl">Example Article</p>
            </a>
            <a href="" className="flex">
              <div className="w-44 h-32 inline-block relative">
                <Image
                  src="https://source.unsplash.com/random"
                  layout="fill"
                  alt=""
                />
              </div>
              <p className="inline-block pl-4 text-2xl">Example Article</p>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
