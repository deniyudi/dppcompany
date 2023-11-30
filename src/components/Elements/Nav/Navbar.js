import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { logodpp } from "../../../assets";

export const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const [open, setOpen] = useState(false);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 600) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className="fixed w-full top-0 z-40 font-primary bg-slate-50 ">
        <div className="xl:px-[10%] justify-between lg:justify-evenly flex flex-wrap items-center xl:justify-between mx-auto p-4">
          <a href="/" class="flex items-center ">
            <img src={logodpp} class="h-16 lg:h-12 xl:h-16" alt=" Logo" />
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
            } lg:px-6 lg:block flex flex-col font-medium lg:text-sm xl:text-base p-4 lg:p-0 mt-4 border-t border-slate-200  bg-slate-50 lg:flex-row lg:w-auto lg:space-x-3 xl:space-x-7 lg:mt-0 md:border-0 md:border-t md:border-slate-200 lg:border-0 md:bg-slate-50`}
          >
            <div className="group inline-block relative lg:text-sm xl:text-base">
              <ul className="flex space-x-4">
                <li className="relative group">
                  <button
                    onClick={() => {
                      navigate("/about");
                    }}
                    className={`flex items-center justify-between w-full py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 md:w-auto ${
                      isActive("/about") ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    Tentang Kami
                    <FiChevronDown className="ml-2 text-xl font-bold " />
                  </button>
                  <ul className="absolute hidden bg-slate-100  group-hover:block">
                    <li className="w-48 ">
                      <a
                        href="/awards"
                        class={`block px-4 py-2 hover:bg-slate-200 ${
                          isActive("/awards") ? "text-blue-700" : ""
                        }`}
                      >
                        Milestone & Award
                      </a>
                    </li>
                    <li>
                      <a
                        href="/board"
                        className={`block px-4 py-2 hover:bg-slate-200 ${
                          isActive("/board") ? "text-blue-700" : ""
                        }`}
                      >
                        Board Of Director
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <a
              href="/industries"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/industries") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Bisnis Kami
            </a>
            <a
              href="/product"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/product") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Produk Support
            </a>
            <a
              href="/career"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/career") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Karir
            </a>
            <a
              href="/news"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/news") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Berita
            </a>
            <a
              href="/programcsr"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/programcsr") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Program CSR
            </a>
            <a
              href="/esg"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/esg") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              ESG
            </a>
            <a
              href="/contact"
              class={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/contact") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Kontak
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
