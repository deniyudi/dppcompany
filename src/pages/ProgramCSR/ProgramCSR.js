import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "flowbite-react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { background12, } from "../../assets";

const ProgramCSR = () => {
  const data = "Program CSR";

  const _programCsr = () => {
    const [csr, setCsr] = useState([]);

    useEffect(() => {
      getCsr();
    }, []);

    const getCsr = async () => {
      const response = await axios.get(
        "http://localhost:5000/upload?category=csr"
      );
      setCsr(response.data.reverse());
    };

    return (
      <>
        <div
          className="p-3 w-full h-full aspect-video md:p-10 lg:w-[80%] xl:w-[60%] mx-auto"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <Carousel>
            {csr.map((programcsr) => (
              <div key={programcsr.id}>
                <div className="relative">
                  <img
                    src={programcsr.url}
                    alt="Product"
                    className="object-cover h-full w-full"
                  />
                  <div className="w-full h-full absolute bg-imgGelap top-0 left-0"></div>
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-10">
                    <h1 className="text-4xl sm:text-[40px] md:text-5xl lg:text-[44px] text-center font-medium text-[#fff]">
                      {programcsr.judul}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </>
    );
  };
  return (
    <>
      <BackgroundOverlay gambar={background12} content={data} />

      <div className="">
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1000px] mx-auto"
        data-aos="fade-in"
        data-aos-duration="2000"
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
    </>
  );
};

export default ProgramCSR;
