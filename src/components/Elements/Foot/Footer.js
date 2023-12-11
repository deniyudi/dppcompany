import React from "react";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import Logo from "../../../assets/logo.png";

export const Footer = () => {
  return (
    <>
      {/* ======================== */}

      <footer className="bg-slate-50  dark:bg-gray-900">
        <div className="mx-auto w-full p-4 py-6 lg:py-8 justify-between">
          <div className="md:flex md:justify-between md:mx-3">
            <div className="mb-6 md:mb-0 md:w-[50%]">
              <a href="/landingpage" className="">
                <img src={Logo} className="mr-3 mb-4 w-64 h-auto" alt="logo" />
                <p className="text-justify sm:w-[70%] sm:ml-4 text-base text-gray-600 font-normal">
                  PT Dian Pandu Pratama adalah perusahaan bergerak dalam bidang
                  Job & Labour Supply.
                </p>
                <div className="text-justify mt-2 sm:w-[70%] sm:ml-4 text-base text-gray-600 font-semibold">
                  Jam Operational DPP :
                  <span className="font-normal">
                    <ul className="list-disc ml-5">
                      <li>
                        Office (Senin-Jumat): 7.30-16.30 (Jumat selesai pukul
                        17.00)
                      </li>
                      <li>Plant operation (Sabtu-Minggu): 7.30-15.30</li>
                      <li>Area site mengikuti regulasi lokal.</li>
                    </ul>
                  </span>
                </div>
              </a>
            </div>

            {/* ============== */}

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:w-[50%] space-x-px">
              <div className="">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul className=" text-gray-600 font-normal  dark:text-gray-400">
                  <li className="mb-4">
                    <a href="/about" className="hover:underline ">
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/product" className="hover:underline">
                      Product
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/career" className="hover:underline">
                      Career
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/news" className="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Head Office
                </h2>

                <ul className="text-gray-500 dark:text-gray-400 font-normal w-full">
                  <li className="mb-4 flex items-center">
                    <i className="fa fa-map-marker fa-lg mr-5 w-4 "></i>
                      Blok i, Jl. Jababeka XII, Kec. Cikarang Utara, Kab.Bekasi,
                      Jawa Barat 17530
                  </li>
                  <li className="mb-4 flex items-center">
                    <i className="fa fa-phone fa-lg mr-5 w-4"></i>
                    (021) 893 5016
                  </li>
                  {/* <li className="mb-4 flex items-center">
                    <i className="fa fa-envelope fa-lg mr-5 w-4"></i>
                    <p>
                      <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
                    </p>
                  </li> */}
                </ul>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-7 lg:mb-3" />
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <div className="flex mt-4 space-x-5 sm:mt-0 col-span-2 md:mt-4 w-full">
                  {/* <div className="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href=""
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i className="fa fa-facebook "></i>
                    </a>
                  </div> */}
                  <div className="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="mailto:contact@dpp.co.id"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      aria-label="Email to contact@dpp.co.id"
                    >
                      <i className="fa fa-envelope "></i>
                    </a>
                  </div>
                  <div className="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://www.youtube.com/@dppofficial3520"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      aria-label="youtube dpp.co.id"
                    >
                      <i className="fa fa-youtube-play "></i>
                    </a>
                  </div>
                  <div className="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://instagram.com/official.dpp?igshid=MzRlODBiNWFlZA=="
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      aria-label="instagram dpp"
                    >
                      <i className="fa fa-instagram "></i>
                    </a>
                  </div>
                  <div className="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://www.linkedin.com/company/pt-dian-pandu-pratama"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                      aria-label="linked in dpp"
                    >
                      <i className="fa fa-linkedin "></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="mx-auto sm:flex sm:items-center sm:justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" className="hover:underline">
                PT Dian Pandu Pratama
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
