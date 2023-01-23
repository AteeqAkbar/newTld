import React from "react";
import Link from "next/link";
import { BsFilePerson } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";

function Aside({ selectHandler }) {
  return (
    <aside className="absolute inset-y-0 left-0 bg-black text-white shadow-md  w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <h1 className="text-xl font-bold leading-none">
              <span className="text-yellow-700">Admin </span> Dashboard
            </h1>
          </div>
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href=""
                  onClick={() => selectHandler("user")}
                  className="flex items-center gap-2 bg-white hover:bg-yellow-50 rounded-xl font-bold text-lg text-gray-900 py-3 px-4"
                >
                  <BsFilePerson className="w-[25px] h-[25px]" />
                  Users
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  onClick={() => selectHandler("session")}
                  className="flex items-center bg-white gap-2 hover:bg-yellow-50 rounded-xl font-bold text-lg text-gray-900 py-3 px-4"
                >
                  <SiGooglemeet className="w-[25px] h-[25px]" />
                  Sessions
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  onClick={() => selectHandler("requestSession")}
                  className="flex items-center bg-white gap-2 hover:bg-yellow-50 rounded-xl font-bold text-lg text-gray-900 py-3 px-4"
                >
                  <SiGooglemeet className="w-[25px] h-[25px]" />
                  Requested Sessions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              className=""
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </button>{" "}
          <span className="font-bold text-sm ml-2">Logout</span>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
