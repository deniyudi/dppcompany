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

  return (
    <>
      <nav className="fixed w-full top-0 z-40 font-primary bg-slate-50 ">
        <div className="xl:pl-[10%] xl:pr-[3%]  justify-between lg:justify-evenly flex flex-wrap items-center xl:justify-between mx-auto py-2 px-3 md:p-4">
          <a href="/" className="flex items-center ">
            <img src={logodpp} className="h-16 lg:h-12 xl:h-16" alt=" Logo" />
          </a>
          <button
            aria-label="hamburger"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <div className="text-2xl">{open ? <FiX /> : <FiMenu />}</div>
          </button>

          <div
            className={`relative w-full ${
              open ? "visible" : "hidden"
            } lg:px-4 lg:block flex flex-col font-medium lg:text-sm xl:text-base px-2 py-3 lg:p-0 mt-4 border-t border-slate-200 bg-slate-50 lg:flex-row lg:w-auto lg:space-x-3  xl:space-x-7 lg:mt-0 md:border-0 md:border-t md:border-slate-200 lg:border-0 md:bg-slate-50`}
          >
            <div className="group inline-block relative z-40 lg:text-sm xl:text-base">
              <ul className="flex">
                <li className="relative group pl-4 lg:pl-0">
                  <button
                    onClick={() => {
                      navigate("/about");
                    }}
                    className={`flex items-center justify-between  w-full px-3 py-1  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 md:w-auto ${
                      isActive("/about") ? "text-blue-700" : "text-gray-900"
                    }`}
                  >
                    Tentang Kami
                    <FiChevronDown className="ml-2 text-xl font-bold " />
                  </button>
                  <ul className="absolute hidden bg-slate-100   group-hover:block">
                    <li className="w-48 ">
                      <a
                        href="/awards"
                        className={`block px-4 py-2 hover:bg-slate-200 ${
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
            {/* =======           */}
            <div className="group inline-block relative lg:text-sm xl:text-base lg:space-x-0">
              <ul className=" flex flex-col lg:flex-row space-x-7">
                <li
                  className={`mr-2 pb-3 pt-3 lg:pt-0 lg:pb-0 pl-4 lg:pl-0 ${
                    isActive("/industries") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/industries"
                    className="py-2 px-3 rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Bisnis Kami
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/product") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/product"
                    className="py-2 rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Produk Support
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/career") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/career"
                    className="py-2 rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Karir
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/news") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/news"
                    className="py-2 rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Berita
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/programcsr") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/programcsr"
                    className="py-2  rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Program CSR
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/esg") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/esg"
                    className="py-2  rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    ESG
                  </a>
                </li>
                <li
                  className={`mr-2 py-2 lg:py-0 ${
                    isActive("/contact") ? "text-blue-700" : "text-gray-900"
                  }`}
                >
                  <a
                    href="/contact"
                    className="py-2  rounded hover:bg-transparent md:border-0 hover:text-blue-700 lg:p-0"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            {/* <ul className="flex">
              <li
                className={`mr-2 ${
                  isActive("/industries") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/industries"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Bisnis Kami
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/product") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/product"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Produk Support
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/career") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/career"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Karir
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/news") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/news"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Berita
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/programcsr") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/programcsr"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Program CSR
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/esg") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/esg"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  ESG
                </a>
              </li>
              <li
                className={`mr-2 ${
                  isActive("/contact") ? "text-blue-700" : "text-gray-900"
                }`}
              >
                <a
                  href="/contact"
                  className="py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0"
                >
                  Kontak
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>

      {/* <nav className="fixed w-full top-0 z-40 font-primary bg-slate-50 ">
        <div className="xl:px-[10%] justify-between lg:justify-evenly flex flex-wrap items-center xl:justify-between mx-auto p-4">
          <a href="/" className="flex items-center ">
            <img src={logodpp} className="h-16 lg:h-12 xl:h-16" alt=" Logo" />
          </a>
          <button
            aria-label="hamburger"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
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
                        className={`block px-4 py-2 hover:bg-slate-200 ${
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
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/industries") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Bisnis Kami
            </a>
            <a
              href="/product"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/product") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Produk Support
            </a>
            <a
              href="/career"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/career") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Karir
            </a>
            <a
              href="/news"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/news") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Berita
            </a>
            <a
              href="/programcsr"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/programcsr") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Program CSR
            </a>
            <a
              href="/esg"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/esg") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              ESG
            </a>
            <a
              href="/contact"
              className={` py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 lg:p-0 ${
                isActive("/contact") ? "text-blue-700 " : " text-gray-900 "
              }`}
            >
              Kontak
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};
