import React, { useEffect } from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { background15 } from "../../assets";

import {
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
} from "../../assets";

export const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const productImages = [
    { img: manhauler, title: "Man Hauler" },
    { img: xprovessel, title: "Xpro Medium Vessel" },
    { img: stemmingtruck, title: "Stemming Truck" },
    { img: tippervessel, title: "Tipper Vessel" },
    { img: mixer, title: "Concrete Mixer" },
    { img: bulktank, title: "Bulk Tanker" },
    { img: lubetruck, title: "Lube Truck" },
    { img: fueltruck, title: "Fuel Truck" },
    { img: onroadtrailer, title: "Onroad Trailer" },
    { img: lowbedtrailer, title: "Low Bed Trailer" },
    { img: xprovesselbig, title: "Xpro Vessel" },
    { img: semitrailer, title: "Semi Trailer Door Tipper" },
    { img: semitrailertipper, title: "Semi Trailer Side Tipper" },
    { img: attachment, title: "Attachment" },
    { img: towerlamp, title: "Tower Lamp" },
  ];
  console.log(productImages);
  return (
    <>
      <main className="w-full h-auto mx-auto">
        {/*background overlay judul */}
        <BackgroundOverlay gambar={background15} content="Produk Support" />
        <div className="text-center px-6 mx-auto w-auto sm:px-6 sm:w-[500px] md:w-[600px] lg:w-[90%] lg:mb-13">
          <p className="text-lg font-normal sm:text-xl lg:text-2xl">
            Dalam menjalankan proses Product Support Manufacturing, kami
            berfokus pada kendaraan alat - alat berat seperti produk Scania,
            Hino dan UD Trucks untuk pengerjaan bagian Dump Vessel, Tipper
            Vessel, Concrete Mixer dan On Road Trailer yang terbagi dalam 3
            proses: Fabrikasi bucket dari alat berat (Dump Vessel/Tipper
            Vesser), Pengecatan bucket dari alat berat (Dump Vessel/Tipper
            Vesser/Water Tank), Assembly dan Disassembly bucket dari alat berat
            (Dump Vessel/Tipper Vesser/Wing Box/Water Tank)
          </p>
        </div>

        <hr className="mt-10 mb-6" />

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
            <h2
              className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Fabrication Support Patria
            </h2>

            <div
              className="mx-auto w-full p-3 sm:grid sm:px-10 sm:grid-cols-1 sm:justify-center md:flex md:flex-wrap md:px-0 lg:px-0 "
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              {productImages.map((product, index) => (
                <div
                  key={index}
                  className="px-4 text-black text-left mb-4 sm:mb-12 md:w-64 lg:w-80 xl:w-96  "
                >
                  <img
                    src={product.img}
                    alt={`product-${index}`}
                    className="w-full h-full aspect-video bg-cover hover:scale-105 transition-transform duration-300 transform"
                  />

                  <div className="">
                    <div className="text-center text-lg uppercase italic font-light sm:text-lg sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                      {product.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mx-auto grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-400 text-center">
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Dump-Vessel-20.png"
                alt="ut"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Concrete-Mixer.png"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-SST.jpg"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-Components-HD.jpg"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Assy-Body-SST.jpg"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/ASsy-Fab-SDT-110.jpg"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/01/Dolly-50.jpg"
                alt="patria"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/Fab-Assy-SLT-45.jpg"
                alt="patria"
              />
            </div> */}
          </div>
        </section>
        <hr className="mt-10 mb-6" />

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-10 mx-auto max-w-screen-xl px-4">
            <h2
              className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              Clients Support
            </h2>
            <div
              className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2  dark:text-gray-400 text-center"
              data-aos="fade-in"
              data-aos-duration="1500"
            >
              <img
                className="flex justify-center items-center mx-auto"
                src="https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/1AFbQ0GKhNMlFwXGrpvOSjpWuW6v09eDoXZkjYqr.png"
                alt="ut"
              />
              <img
                className="flex justify-center items-center mx-auto"
                src="https://www.dpp.co.id/wp-content/uploads/2022/02/PATRIA.png"
                alt="patria"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
