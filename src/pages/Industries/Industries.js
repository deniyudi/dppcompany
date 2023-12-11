import React, { useEffect } from "react";
import Slider from "react-slick";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import {
  manufacturing1,
  manufacturing2,
  manufacturing3,
  manufacturing4,
  manpower1,
  manpower2,
  manpower3,
  manpower4,
  // manpower5,
  weldertest1,
  // weldertest2,
  weldertest3,
  weldertest4,
  weldertest5,
  patria,
  ut,
  triatra,
  sigma,
  pmi,
  pml,
  pmp,
  pli,
  mapdpp,
  fabrication1,
  fabrication2,
  fabrication3,
  fabrication4,
  background7,
} from "../../assets";

const Industries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = "Bisnis Kami";
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <>
      <BackgroundOverlay content={data} gambar={background7} />

      <div className=" mx-auto text-center px-5 lg:w-[80%] lg:mb-24 lg:px-0">
        <p className="lg:font-normal lg:text-lg xl:text-2xl text-center">
          Dalam menjalankan bisnis, kami fokus pada dua sektor ketenagakerjaan
          yaitu penyedia tenaga kerja (Manpower Support on Job Site) serta
          penyedia jasa fabrikasi dan perbaikan kendaraan alat berat
          (Manufacturing & Repairment Process). Di samping itu, untuk
          mengedepankan customer, kami juga mengembangkan pada manpower
          certification yang diberikan kepada internal dan eksternal perusahaan
          serta memperluas jejaring dengan memberikan jasa borongan project pada
          fabrikasi alat berat lainnya.
        </p>
      </div>

      <div
        className="grid mt-1 grid-cols-1 lg:grid-cols-4 mx-auto lg:px-32"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="p-3  w-full h-full  mx-auto">
          <Slider {...settings}>
            <img alt="12312" src={fabrication1} />
            <img alt="12312" src={fabrication2} />
            <img alt="12312" src={fabrication3} />
            <img alt="12312" src={fabrication4} />
          </Slider>

          <div className="text-center w-full">
            <p className="uppercase font-semibold lg:text-lg xl:text-2xl my-4 md:h-[76px] ">
              Manufacturing Process
            </p>
            <p className="mb-4 xl:text-justify lg:text-sm xl:text-base">
              Kami menyediakan jasa fabrikasi, painting dan assembling alat
              berat dengan layanan manpower yang sesuai dengan kompetensi
              dibutuhkan oleh customer Manpower Support on Site
            </p>
          </div>
        </div>

        <div className="p-3 w-full h-full  mx-auto">
          <Slider {...settings}>
            <img alt="12312" src={manpower1} />
            <img alt="12312" src={manpower2} />
            <img alt="12312" src={manpower3} />
            <img alt="12312" src={manpower4} />
          </Slider>
          <div className="text-center w-full">
            <p className="uppercase font-semibold lg:text-lg xl:text-2xl my-4 md:h-[76px]">
              Manpower Support on Site
            </p>
            <p className="mb-4 xl:text-justify  lg:text-sm xl:text-base">
              Dalam berupaya meningkatkan SDM di dalam bisnis AHEMCE dan PATRIA
              Group, kami selalu berusaha untuk dapat memberikan layanan terbaik
              dalam proses manpower solution di bidang Welder, Assembler, dan
              Painter untuk dapat menjadi solusi layanan manpower terbaik di
              Indonesia
            </p>
          </div>
        </div>
        <div className="p-3 w-full h-full  mx-auto">
          <Slider {...settings}>
            <img alt="12312" src={weldertest5} />
            <img alt="12312" src={weldertest1} />
            <img alt="12312" src={weldertest4} />
            <img alt="12312" src={weldertest3} />
          </Slider>
          <div className="text-center w-full">
            <p className="uppercase font-semibold lg:text-lg xl:text-2xl my-4 md:h-[76px]">
              Welder Certification
            </p>
            <p className="mb-4 xl:text-justify  lg:text-sm xl:text-base">
              Kompetensi merupakan salah satu pokok penting dalam pekerjaan alat
              berat sehingga kami juga berfokus untuk menyediakan program
              sertifikasi BNSP yang bekerja sama dengan Lembaga Sertifikasi
              Profesi (LSP) untuk manpower internal ataupun eksternal agar dapat
              sesuai kebutuhan para user/customer
            </p>
          </div>
        </div>
        <div className="p-3 w-full h-full  mx-auto">
          <Slider {...settings}>
            <img alt="12312" src={manufacturing1} />
            <img alt="12312" src={manufacturing2} />
            <img alt="12312" src={manufacturing3} />
            <img alt="12312" src={manufacturing4} />
          </Slider>
          <div className="text-center w-full">
            <p className="uppercase font-semibold lg:text-lg xl:text-2xl my-4 md:h-[76px]">
              Mass - Production Project
            </p>
            <p className="mb-4 xl:text-justify lg:text-sm xl:text-base">
              Selain proses manufaktur industri dan layanan manpower, kami juga
              menyediakan pekerjaan borongan dalam proses konstruksi bangunan
              ataupun fabrikasi kendaran alat berat dan kapal tongkang
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-10 mb-10" />
      <div className="text-center w-full h-full lg:mt-2 overflow-hidden">
        <h2
          data-aos="fade-in"
          data-aos-duration="2500"
          class="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
        >
          Our Location
        </h2>
        <img
          data-aos="fade-up"
          data-aos-duration="1500"
          className="w-full mt-5 my-10"
          src={mapdpp}
          alt="branch"
        />
      </div>

      <hr className="mt-10 mb-10" />
      <section class="bg-white dark:bg-gray-900 overflow-hidden">
        <div class="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
          <h2
            data-aos="fade-in"
            data-aos-duration="2500"
            class="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
          >
            Our Clients
          </h2>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 text-center"
          >
            <img
              className="flex justify-center items-center"
              src={patria}
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src={ut}
              alt="ut"
            />
            <img
              className="flex justify-center items-center mt-3"
              src={triatra}
              alt="triatra"
            />

            <img
              className="flex justify-center items-center"
              src={pmp}
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src={pml}
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src={pli}
              alt="patria"
            />
            <img
              className="flex justify-center items-center"
              src={pmi}
              alt="patria"
            />
            <img
              className="flex justify-center items-center w-52"
              src={sigma}
              alt="patria"
            />
          </div>
        </div>
      </section>

   
    </>
  );
};

export default Industries;
