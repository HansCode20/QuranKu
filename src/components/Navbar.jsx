import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 shadow-lg ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none" href="#">
            <div className="flex items-center gap-2">
              <img className="w-10 h-auto" src={logo} alt="Logo" />
              <p
                style={{ fontFamily: "Ramadhan Karim, sans-serif" }}
                className="text-3xl font-semibold"
              >
                QuranKu
              </p>
            </div>
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={toggleNav}
              style={{
                color: "black",
              }}
              aria-label="Toggle navigation"
            >
              {isOpen ? <RxCross2 /> : <IoMenu />}
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5  ${
            isOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div className="flex gap-5">
            <Link to="/" className="font-medium text-black hover:text-gray-400">
              Home
            </Link>
            <Link
              to="/sholat"
              className="font-medium text-black hover:text-gray-400"
            >
              Jadwal Shalat
            </Link>
            <Link
              to="/surah"
              className="font-medium text-black hover:text-gray-400"
            >
              Surah
            </Link>
            <Link
              to="/doa"
              className="font-medium text-black hover:text-gray-400"
            >
              Doa Harian
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
