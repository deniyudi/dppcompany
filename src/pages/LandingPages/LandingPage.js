import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import Carousel from "react-grid-carousel";
import CountUp from "react-countup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  weldercertification,
  fabrication,
  imgrounded,
  attachment,
  bulktank,
  fueltruck,
  lowbedtrailer,
  lubetruck,
  manhauler,
  mixer,
  onroadtrailer,
  semitrailer,
  semitrailertipper,
  stemmingtruck,
  tippervessel,
  towerlamp,
  xprovessel,
  xprovesselbig,
  bghome,
  landing1,
  patria,
  triatra,
  ut,
  pmp,
  pli,
  pml,
  pmi,
  sigma,
  wistle,
  manufacturing,
} from "../../assets";

import pdf from "../../assets/File Pdf/Pedoman Whisle Blower YKBUT 2021.pdf";

const LandingPage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, []);

  const getNews = async () => {
    const response = await axios.get(
      "http://dpp.co.id:5000/upload?category=news"
    );
    setNews(response.data.reverse());
  };

  const navigate = useNavigate();
  const productImages = [
    manhauler,
    xprovessel,
    stemmingtruck,
    tippervessel,
    mixer,
    bulktank,
    lubetruck,
    fueltruck,
    onroadtrailer,
    lowbedtrailer,
    xprovesselbig,
    semitrailer,
    semitrailertipper,
    attachment,
    towerlamp,
  ];

  return (
    <>
      <main className="h-full w-full bg-slate-50 overflow-x-hidden">
        <div className="text-left w-auto mt-16 md:mt-24 ml-4 lg:ml-[10%] pt-16">
          <p className="lg:text-lg font-normal uppercase mb-3 text-gray-500 tracking-[6px]">
            Welcome to
          </p>
          <p className="text-3xl lg:text-6xl font-semibold ">
            PT Dian Pandu Pratama
          </p>
          <hr className="border-black my-7" />
          <p className="lg:w-[80%] xl:w-[60%] pr-2 text-lg font-normal text-gray-700">
            PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun
            2012 dan berfokus pada Product Support Manufacturing dan Manpower
            Skilled Support on Job Site. Kami memiliki Manpower yang telah
            tersebar di berbagai daerah Kalimantan & Sumatera dengan jumlah
            lebih dari 2300. Komitmen kami selalu berusaha pada pemberian
            Excellence Services dan High Skilled Competent Manpowers.
          </p>
        </div>

        {/* GAMBAR  */}

        <div className="relative overflow-hidden mt-10">
          <img
            src={bghome}
            alt="imgbg"
            loading="lazy"
            className="w-full h-full"
          />
        </div>

        {/* ===== KET DPP & MP =====  */}
        <div
          className="text-center bg-slate-50 py-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="lg:grid lg:grid-cols-2 justify-items-center">
            <div className="text-left w-auto  ml-5 xl:ml-[20%] lg:pt-8">
              <p className="text-base font-normal uppercase mb-2 text-gray-500 tracking-[4px]">
                Why us
              </p>
              <p className="text-3xl font-semibold lg:w-[60%] pr-2 md:pr-0 mb-4">
                Dian Pandu Pratama as Job Supply and Labour Supply
              </p>
              <p className="text-justify mr-5 lg:w-[80%] mb-3">
                Dalam rangka memberikan Excellence Service, kami selalu
                mengedepankan kebutuhan customer kami sehingga service yang
                diberikan bisa optimal dan maksimal.
              </p>

              <Button
                color="failure"
                onClick={() => navigate("/about")}
                className=""
              >
                <p>Tentang Kami</p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="mt-7 mb-10">
                <p className="text-base font-normal uppercase mb-3 text-gray-500 tracking-[4px]">
                  Total Manpower
                </p>
                <div className="grid grid-cols-3 mb-4 lg:grid-cols-3 pr-10">
                  <div className="space-y-1">
                    <CountUp
                      className="font-bold text-2xl text-gray-600"
                      end={2106}
                      duration={4}
                    />
                    {/* <p className="font-bold text-2xl text-gray-600">2106</p> */}
                    <p className="font-normal text-lg text-gray-700">
                      Fabricator
                    </p>
                  </div>
                  <div className="space-y-1">
                    <CountUp
                      className="font-bold text-2xl text-gray-600"
                      end={111}
                      duration={4}
                    />
                    <p className="font-normal text-lg text-gray-700">Leader</p>
                  </div>
                  <div className="space-y-1">
                    <CountUp
                      className="font-bold text-2xl text-gray-600"
                      end={200}
                      duration={4}
                    />
                    <p className="font-normal text-lg text-gray-700">
                      Administrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              className="text-center mx-auto lg:mt-6 lg:w-[600px] h-auto"
              src={landing1}
              alt="hoe"
            />
          </div>
        </div>

        {/* VISI MISI  */}
        <div className="text-center bg-slate-50 py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-5 xl:px-[10%]">
            <div className="py-6 px-5 lg:px-0 lg:pr-6 flex items-center justify-center">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                // className="lg:rounded-e-[50px] rounded"
                src={imgrounded}
                alt="hoe"
              />
            </div>
            <div
              className=" text-left w-auto ml-5 pt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                Vision & Mission
              </p>
              <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                Vision{" "}
              </p>
              <p className="pr-2 mb-3">
                “Menjadi perusahaan sub-contractor terbaik di bidang jasa
                fabrikasi dan perakitan alat angkut pada wilayah kerja pelanggan
                AHEMCE Group“
              </p>

              <div className="mt-4">
                <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                  Mission{" "}
                </p>
                <div className="pr-2 mb-3">
                  <ul className="list-disc ml-6 space-y-2 pr-2">
                    <li>
                      Menjadi perusahaan yang bermanfaat bagi bangsa, negara dan
                      pemangku kepentingan dengan berfokus pada kepuasan
                      pelanggan
                    </li>
                    <li>
                      Mengembangkan dan melaksanakan sistem pengelolaan
                      kompentensi karyawan yang up to date, berkesinambungan dan
                      senantiasa mendukung bisnis perusahaan.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bisnis & product ====================  */}
        <div className="text-center pt-16 md:pb-10 bg-white">
          {/* <p className="text-3xl my-4 font-bold uppercase">Our Business</p> */}
          <p
            className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            Our Business
          </p>

          <div
            className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src={manufacturing}
                alt="product"
                className="w-full h-full aspect-video rounded-xl bg-cover hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Manufacturing process
                </p>
              </div>
            </div>
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src={weldercertification}
                alt="welder"
                className="w-full h-full aspect-video bg-cover rounded-xl hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Welder Certification
                </p>
              </div>
            </div>
            <div
              // onClick={() => navigate("/typescania")}
              className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
            >
              <img
                src={fabrication}
                alt="product"
                className="w-full h-full aspect-video bg-cover rounded-xl hover:scale-105 transition-transform duration-300 transform "
              />
              <div className="">
                <p className="font-normal text-center text-lg mt-1 uppercase text-gray-700">
                  Fabrication Project
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* fabrication  */}
        <div
          className=" text-center py-10  bg-white px-[10%] space-y-5"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <p className="text-lg font-normal uppercase mb-10 text-gray-500 tracking-[4px]">
            Product Fabrication
          </p>
          <Carousel cols={5} rows={1} gap={20} autoplay={6000} loop>
            {productImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`product-${image.id}`}
                  className="w-full h-full aspect-square bg-cover hover:scale-105 transition-transform duration-300 transform"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* client new 2  */}
        <div className="bg-white py-10 sm:py-32 lg:pb-20 lg:pt-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p
              className="text-lg font-normal uppercase mb-10 text-center text-gray-500 tracking-[4px]"
              data-aos="fade-in"
              data-aos-duration="1200"
            >
              Our Clients
            </p>
            <div
              data-aos="fade-in"
              data-aos-duration="1500"
              className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            >
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={patria}
                alt="patria"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={triatra}
                alt="triatra"
                width="158"
                height="48"
              />

              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ut}
                alt="ut"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={pmp}
                alt="pmp"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={pli}
                alt="ppli"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 lg:col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={pml}
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 lg:col-start-3 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={pmi}
                alt="Statamic"
                width="158"
                height="48"
              />
              <img
                className="col-span-2 lg:col-start-4 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={sigma}
                alt="Statamic"
                width="158"
                height="48"
              />
            </div>
          </div>
        </div>

        {/* NEWS HIGHLIGHT  */}

        <section className="bg-white pt-10 pb-10 lg:pt-[60px] lg:pb-20 md:px-3 lg:px-10 xl:px-32">
          <div className="container mx-auto ">
            <p
              className="text-lg font-normal text-center uppercase mb-10 text-gray-500 tracking-[4px]"
              data-aos="fade-in"
              data-aos-duration="1200"
            >
              News Highlight
            </p>
            <div
              className="-mx-4 flex flex-wrap"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {news.slice(0, 3).map((newsItem) => (
                <div
                  className="w-full space-x-10 md:w-1/2 lg:w-1/3 "
                  key={newsItem.id}
                >
                  <div className="mx-auto mb-10 md:max-w-[300px] xl:max-w-[370px]">
                    <div className="mb-5 overflow-hidden rounded">
                      <img
                        src={newsItem.url}
                        alt="berita img"
                        className="w-full h-52"
                      />
                    </div>
                    <div>
                      <span className="mb-3 text-gray-600 inline-block rounded py-1 text-center text-sm font-extralight">
                        {new Intl.DateTimeFormat("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(newsItem.createdAt))}
                      </span>
                      <h3>
                        <a
                          href="/"
                          className="text-dark hover:text-primary mb-3 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-[22px]"
                        >
                          {newsItem.judul}
                        </a>
                      </h3>
                      <p className="text-body-color text-base mb-2 line-clamp-2">
                        {newsItem.desc}
                      </p>
                      <Button
                        className="-ml-4"
                        color="#fff"
                        onClick={() => navigate(`/detail/${newsItem.id}`)}
                      >
                        <p className="font-semibold text-base">Selengkapnya</p>
                        <HiOutlineArrowRight className="ml-2 h-5 w-4 mt-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* whistle blowing  */}
        <div
          className="text-center bg-slate-50 py-10"
          data-aos="fade-in"
          data-aos-duration="1500"
        >
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="lg:grid lg:grid-cols-2 justify-items-center">
            <div className="text-left w-auto  ml-5 xl:ml-[20%] lg:pt-5">
              <p className="text-base font-normal uppercase mb-2 text-gray-500 tracking-[4px]">
                WHISTLE BLOWING
              </p>
              <p className="text-3xl font-semibold lg:w-[60%] mb-4">
                Whistle Blowing System
              </p>
              <p className="text-justify mr-5 lg:w-[90%] mb-3">
                Whistle Blowing System adalah mekanisme bagi
                yayasan/koperasi/perusahaan dalam pelaporan atas dugaan
                pelanggaran atau kecurangan yang berindikasi merugikan bagi
                Perusahaan atau hal-hal lain yang melanggar kode etik dan
                peraturan perundang-undangan. Pelapor dapat menyampaikan laporan
                dugaan pelanggaran kepada TKPP melalui saluran yang telah
                disediakan bawah ini:
              </p>
              <div className="flex items-center py-1 space-x-2">
                <i className="fa fa-envelope fa-lg w-4"></i>
                <span className="font-semibold self-center mt-1">Email </span>
                <span className="mt-[2px]">:</span>
                <span className="text-lg">
                  <a href="mailto:contact@dpp.co.id"> contact@dpp.co.id</a>
                </span>
              </div>

              <div className="flex space-x-4 mt-4">
                <Button className="">
                  <a href={pdf} rel="noreferrer" target="_blank">
                    Baca Selengkapnya
                  </a>
                </Button>
                <Button color="failure" className="">
                  <a
                    href={pdf}
                    download="Pedoman Whistle Blower YKBUT 2021.pdf"
                  >
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
            <img
              data-aos="fade-in"
              data-aos-duration="1500"
              className="text-center mx-auto hidden lg:block"
              src={wistle}
              alt="wistle"
            />
          </div>
        </div>

        <hr className="w-[80%] mx-auto" />

        {/* network  */}
        <div className="text-center mt-3 md:mt-9 bg-slate-50 py-10 border-b">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="lg:grid lg:grid-cols-2 justify-items-center space-x-4 lg:space-x-10">
            <iframe
              data-aos="fade-in"
              data-aos-duration="1000"
              title="maps"
              rel="preconnect"
              className="w-full h-[260px] lg:h-[300px] xl:pl-[20%]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8771927274815!2d107.13395415063958!3d-6.279871795141472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698530079bb95d%3A0x6e3bd034965ef020!2sPt%20Dian%20Pandu%20Pratama!5e0!3m2!1sid!2sid!4v1696404349311!5m2!1sid!2sid"
            />
            <div
              className="text-left w-auto space-y-3 py-5 pl-0"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              {/* <p className="text-xl font-thin uppercase">Get In touch</p> */}
              <p className="text-lg font-normal uppercase  text-gray-500 lg:tracking-[4px]">
                Get In tOUCH
              </p>
              <p className=" text-2xl lg:text-3xl font-semibold">
                Let’s contact us for more information
              </p>
              <p className="pr-5 lg:w-[80%] mb-10">
                Butuh bantuan untuk service kami? hubungi kami melalui contact
                di Bawah ini
              </p>
              <Button onClick={() => navigate(`/contact`)}>
                <p>Contact Us</p>
                <HiOutlineArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <img
              className="mx-auto my-4 w-72 xl:ml-16"
              src="https://www.uniquip.co.id/wp-content/uploads/2023/09/UEI_2023_FINAL-UNIQCALL-1024x478.jpg"
              alt=""
            /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
