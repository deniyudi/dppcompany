import React from "react";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css";
import Logo from "../../../assets/logo.png";

export const Footer = () => {
  return (
    <>
      {/* ======================== */}

      <footer class="bg-slate-50  dark:bg-gray-900">
        <div class="mx-auto w-full p-4 py-6 lg:py-8 justify-between">
          <div class="md:flex md:justify-between md:mx-3">
            <div class="mb-6 md:mb-0 md:w-[50%]">
              <a href="/landingpage" class="">
                <img src={Logo} class="mr-3 mb-4 w-64 h-auto" alt="logo" />
                <p className="text-justify sm:w-[70%] sm:ml-4 text-base text-gray-600 font-normal">
                  PT Dian Pandu Pratama adalah perusahaan  bergerak dalam bidang Job & Labour Supply.
                </p>
                <p className="text-justify mt-2 sm:w-[70%] sm:ml-4 text-base text-gray-600 font-semibold">
                  Jam Operational DPP :
                  <span className="font-normal">
                    <ul className="list-disc ml-5">
                      <li>
                        Office (Senin-Jumat): 7.30-16.30 (Jumat selesai pukul
                        17.00)
                      </li>
                      <li>Plant operation (Sabtu-Minggu): 7.30-15.30</li>
                      {/* <li>Area site mengikuti regulasi lokal.</li> */}
                    </ul>
                  </span>
                </p>
              </a>
            </div>

            {/* ============== */}

            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 md:w-[50%] space-x-px">
              <div className="">
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Company
                </h2>
                <ul class=" text-gray-600 font-normal  dark:text-gray-400">
                  <li class="mb-4">
                    <a href="/about" class="hover:underline ">
                      About
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/product" class="hover:underline">
                      Product
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/career" class="hover:underline">
                      Career
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/contact" class="hover:underline">
                      Contact
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/news" class="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Head Office
                </h2>

                <ul class="text-gray-500 dark:text-gray-400 font-normal w-full">
                  <li class="mb-4 flex items-center">
                    <i className="fa fa-map-marker fa-lg mr-5 w-4 "></i>
                    <p className="w-full">
                      Blok i, Jl. Jababeka XII, Kec. Cikarang Utara, Kab.Bekasi,
                      Jawa Barat 17530
                    </p>
                  </li>
                  <li class="mb-4 flex items-center">
                    <i className="fa fa-phone fa-lg mr-5 w-4"></i>
                    <p>(021) 893 5016</p>
                  </li>
                  <li class="mb-4 flex items-center">
                    <i className="fa fa-envelope fa-lg mr-5 w-4"></i>
                    <p>
                      <a href="mailto:contact@dpp.co.id">contact@dpp.co.id</a>
                    </p>
                  </li>
                </ul>

                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-7 lg:mb-3" />
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <div class="flex mt-4 space-x-5 sm:mt-0 col-span-2 md:mt-4 w-full">
                  <div class="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href=""
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-facebook "></i>
                    </a>
                  </div>
                  <div class="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="mailto:contact@dpp.co.id"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-envelope "></i>
                    </a>
                  </div>
                  <div class="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://www.youtube.com/@dppofficial3520"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-youtube-play "></i>
                    </a>
                  </div>
                  <div class="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://instagram.com/official.dpp?igshid=MzRlODBiNWFlZA=="
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-instagram "></i>
                    </a>
                  </div>
                  <div class="lg:bg-slate-200 lg:rounded-full h-8 w-8 flex justify-center items-center">
                    <a
                      href="https://www.linkedin.com/company/pt-dian-pandu-pratama"
                      class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <i class="fa fa-linkedin "></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 col-span-2 mx-auto  w-full">
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-facebook fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-twitter fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-linkedin fa-1x"></i>
                </a>
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <i className="fa fa-instagram fa-1x"></i>
                </a>
              </div> */}
            </div>
          </div>

          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="mx-auto sm:flex sm:items-center sm:justify-center">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" class="hover:underline">
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
