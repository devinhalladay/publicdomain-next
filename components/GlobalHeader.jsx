import { useState } from "react";

export default function GlobalHeader(props) {
  const [isMenuVisible, toggleMenuVisibility] = useState(false);
  return (
    <header
      className={`absolute transition-all left-3 top-3 px-2 bg-white border border-black shadow-md ${
        isMenuVisible ? "right-64" : ""
      }`}>
      <div
        className={`breadcrumbs  flex items-center h-10 ${
          isMenuVisible ? "border-b border-black" : ""
        }`}>
        <div
          onClick={() => toggleMenuVisibility(!isMenuVisible)}
          className="flex transition-all rounded-sm hover:bg-gray-200 hover:p-1 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></line>
            <line
              x1="40"
              y1="64"
              x2="216"
              y2="64"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></line>
            <line
              x1="40"
              y1="192"
              x2="216"
              y2="192"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></line>
          </svg>
        </div>
        <div className="flex transition-all rounded-sm hover:bg-gray-200 hover:p-1 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="116"
              cy="116"
              r="84"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></circle>
            <line
              x1="175.39356"
              y1="175.40039"
              x2="223.99414"
              y2="224.00098"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"></line>
          </svg>
        </div>

        <nav ariaLabel="Main Navigation" className="">
          <ul className="list-none flex">
            <li className="inline-block flex items-center mr-1">
              <a
                href=""
                className=" transition-all rounded-sm no-underline mr-1 hover:bg-gray-200 hover:p-1">
                Home
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256">
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="96 48 176 128 96 208"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="16"></polyline>
              </svg>
            </li>
            <li className="font-semibold inline-block flex items-center">
              <a
                href=""
                className="transition-all rounded-sm no-underline mr-1 hover:bg-gray-200 hover:p-1">
                Investigate
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuVisible && (
        <div className="grid grid-cols-12 gap-5 pb-3">
          <nav className="col-span-6">
            <Collapsible title="Investigate">
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
            <Collapsible title="Participate">
              <a href="">Link</a>
              <a href="">Link</a>
            </Collapsible>
          </nav>
          <div className="col-span-5 col-start-8">
            <h4 className="pt-4 pb-4">
              <a href="" className="flex">
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="w-44 h-32 inline-block"
                />
                <p className="inline-block pl-4 text-2xl">
                  Example Article
                </p>
              </a>
            </h4>
          </div>
        </div>
      )}
    </header>
  );
}
