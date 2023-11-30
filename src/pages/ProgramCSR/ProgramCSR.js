import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { background12, logodpp} from "../../assets";
import { useNavigate } from "react-router-dom";

// import { Button } from "flowbite-react";
// import { HiOutlineArrowRight } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";

const ProgramCSR = () => {
  const data = "Program CSR";

  // CAROUSEL
  const _programCsr = () => {
    const [csr, setCsr] = useState([]);

    useEffect(() => {
      // window.scrollTo(0, 0);
      getCsr();
    }, []);

    const getCsr = async () => {
      const response = await axios.get(
        "http://20.205.171.175:5000/upload?category=csr"
      );
      setCsr(response.data.reverse());
    };

    const navigate = useNavigate();

    return (
      <>
        <div
          className="p-3 w-full h-full aspect-video md:p-10 lg:w-[80%] xl:px-16 xl:w-[80%] mx-auto"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <Carousel>
            {csr.slice(0, 3).map((programcsr) => (
              <div key={programcsr.id}>
                <div className="relative">
                  <img
                    src={programcsr.url}
                    alt="Product"
                    className="object-cover h-full w-full"
                  />
                  <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
                  <div className="absolute top-0 left-0 space-y-12 w-full h-full flex flex-col justify-center items-center px-10">
                    <p
                      className="text-2xl sm:text-[40px] md:text-5xl lg:text-[44px] text-center font-medium text-[#fff]"
                      onClick={() => navigate(`/detail/${programcsr.id}`)}
                    >
                      {programcsr.judul}
                    </p>
                    {/* <p className="text-xl underline text-center font-medium text-[#fff]" onClick={() => navigate(`/detail/${programcsr.id}`)}>
                      {programcsr.judul}
                    </p> */}
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  };

  // CARD
  const _programCsrCard = () => {
    const [csr, setCsr] = useState([]);

    useEffect(() => {
      // window.scrollTo(0, 0);
      getCsr();
    }, []);

    const getCsr = async () => {
      const response = await axios.get(
        "http://localhost:5000/upload?category=csr"
      );
      setCsr(response.data.reverse());
    };

    const navigate = useNavigate();

    return (
      <div
        className="grid px-4 md:px-6 md:grid-cols-2 lg:grid-cols-3 mt-20  lg:px-32 xl:px-52  mx-auto "
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        {csr.slice(3).map((csr) => (
          <div class="mb-32 mx-auto relative flex max-w-[24rem] md:mx-3 lg:mx-2 flex-col bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border aspect-square  bg-gradient-to-r from-[#f6f5f5a4] to-[#e9e9e9]  text-gray-700 shadow-none flex items-center justify-center">
              <img
                src={csr.url}
                alt="kiw"
                class=""
                onClick={() => navigate(`/detail/${csr.id}`)}
              />
              <div class="absolute top-3 right-4 w-32 px-3 py-1  bg-white rounded-full">
                <img src={logodpp} alt="logo" class="" />
              </div>
            </div>
            <div class="p-6 text-center min-h-[15rem] relative">
              <h4 class="text-base font-medium leading-snug tracking-normal text-[#333333]">
                {new Intl.DateTimeFormat("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                }).format(new Date(csr.createdAt))}
              </h4>
              <p
                class="mt-3 mb-6 text-xl font-semibold leading-relaxed text-[#333333] cursor-pointer line-clamp-3"
                onClick={() => navigate(`/detail/${csr.id}`)}
              >
                {csr.judul}
              </p>

              <div class="absolute left-0 right-0 -bottom-8 flex items-center justify-center">
                <button
                  class="rounded-full bg-[#ff000e] p-5 "
                  onClick={() => navigate(`/detail/${csr.id}`)}
                >
                  <FaAngleRight className="text-white text-2xl font-extrabold" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <BackgroundOverlay gambar={background12} content={data} />

      <div className="overflow-x-hidden">
        <h2 class="mb-8 lg:mb-10 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Misi Kami
        </h2>
        <div className=" mx-auto text-center px-5 lg:w-[80%] lg:mb-10 lg:px-0">
          <p className="lg:font-normal lg:text-2xl text-center">
            Dalam memajukan masyarakat sekitar perusahaan, PT Dian Pandu Pratama
            komit untuk melakukan program Corporate Social Responsibility (CSR)
            di sekitar ring 1, Kota Bekasi, Kalimantan hingga area Sumatera. CSR
            PT Dian Pandu Pratama memiliki 4 pilar (DPP Care, DPP Health, DPP
            Education, dan DPP Green) yang bertujuan untuk memajukan daerah
            berdasarkan kebutuhan masyarakat sekitar. CSR DPP menjunjung tinggi
            nilai nilai Corporate Culture, yaitu SMART agar dapat selaras dengan
            tujuan perusahaan.
          </p>
        </div>
      </div>

      <div
        className="grid grid-cols-2  lg:grid-cols-4 lg:w-[1000px] mx-auto"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <img
          alt="csr"
          src="https://www.dpp.co.id/wp-content/uploads/2022/04/3.png"
          className="mx-auto w-96 lg:w-full"
        />
        <img
          alt="csr"
          src="https://www.dpp.co.id/wp-content/uploads/2022/04/4.png"
          className="mx-auto w-96 lg:w-full"
        />
        <img
          alt="csr"
          src="https://www.dpp.co.id/wp-content/uploads/2022/04/1.png"
          className="mx-auto w-96 lg:w-full"
        />
        <img
          alt="csr"
          src="https://www.dpp.co.id/wp-content/uploads/2022/04/2.png"
          className="mx-auto w-96 lg:w-full"
        />
      </div>

      {_programCsr()}
      {_programCsrCard()}
    </>
  );
};

export default ProgramCSR;
