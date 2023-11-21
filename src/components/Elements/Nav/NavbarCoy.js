import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { logodpp } from "../../../assets";

const NavbarCoy = () => {
  const navigate = useNavigate();
  // const [aboutopen, setAboutOpen] = useState(false);

  // const handleAboutEnter = () => {
  //   setAboutOpen(!aboutopen);
  // };
  // const handleAboutLeave = () => {
  //   setAboutOpen(aboutopen);
  // };

  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 z-40 bg-slate-50 font-primary">
      <div className="xl:px-[10%] flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <img src={logodpp} class="h-16" alt=" Logo" />
        </a>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="text-2xl">{open ? <FiX /> : <FiMenu />}</div>
        </button>

        <div
          className={`relative w-full ${
            open ? "visible" : "hidden"
          }  lg:block flex flex-col font-medium p-4 lg:p-0 mt-4 border-t border-slate-200  bg-slate-50 lg:flex-row lg:w-auto lg:space-x-3 xl:space-x-7 lg:mt-0 md:border-0 md:border-t md:border-slate-200 lg:border-0 md:bg-slate-50`}
        >
          <div className="group inline-block relative">
            {/* <button
                onMouseEnter={() => setAboutOpen(!aboutopen)}
                onMouseLeave={() => setAboutOpen(aboutopen)}
                onClick={() => {
                  navigate("/about");
                }}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 md:w-auto"
              >
                Tentang Kami
                <FiChevronDown className="ml-2 text-xl font-bold " />
              </button>

              <div
                className={`${
                  aboutopen ? "visible" : "hidden"
                } absolute font-normal bg-white divide-y divide-gray-100 rounded-md shadow w-44`}
              >
                <a href="/awards" class="block px-4 py-2 hover:bg-gray-100">
                  Milestone & Award
                </a>
                <a href="/awards" class="block px-4 py-2 hover:bg-gray-100">
                  Milestone & Award
                </a>
              </div> */}
            <ul className="flex space-x-4">
              <li className="relative group">
                <button
                  // onMouseEnter={() => setAboutOpen(!aboutopen)}
                  // onMouseLeave={() => setAboutOpen(aboutopen)}
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 md:w-auto"
                >
                  Tentang Kami
                  <FiChevronDown className="ml-2 text-xl font-bold " />
                </button>
                <ul className="absolute hidden bg-slate-100  group-hover:block">
                  <li className="w-48 ">
                    <a href="/awards" class="block px-4 py-2 hover:bg-slate-200">
                      Milestone & Award
                    </a>
                  </li>
                  <li>
                    <a href="/board" class="block px-4 py-2 hover:bg-slate-200">
                      Board Of Director
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a
            href="/industries"
            class="py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
          >
            Bisnis Kami
          </a>
          <a
            href="/product"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
          >
            Produk Support
          </a>
          <a
            href="/career"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
          >
            Karier
          </a>
          <a
            href="/news"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 "
          >
            Berita
          </a>
          <a
            href="programcsr"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
          >
            Program CSR
          </a>
          <a
            href="/contact"
            class="py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
          >
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCoy;
