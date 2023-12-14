import React, { useEffect } from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import {  esg } from "../../assets";

const Esg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackgroundOverlay
        content="Environment, Social, Governance (ESG)"
        gambar={esg}
      />

      <div className="relative pb-20 -mt-20 bg-slate-50 overflow-x-hidden">
        <p className="text-3xl py-10 font-bold lg:pt-20 lg:font-bold lg:text-5xl text-center lg:px-[200px]">
          Environment, Social, Governance 
        </p>
        <div className="text-xl text-[#333333] text-justify  font-medium px-6 lg:pt-5 lg:font-medium lg:text-2xl  lg:px-40">
          Saat ini, PT Dian Pandu Pratama telah memulai langkah-langkah untuk
          menerapkan program ESG (Environmental, Social, and Governance) dengan
          aktif mencatat jumlah emisi yang dihasilkan oleh operasional
          perusahaan, sebagai upaya untuk meningkatkan tanggung jawab sosial dan
          lingkungan.
        </div>
        {/* <div className="pb-40 lg:pb-60 lg:pt-24 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container m-auto lg:px-20  text-gray-600 md:px-12 ">
            <div className="space-y-6 md:space-y-0 lg:flex  lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-3/12">
                <div className="text-center text-gray-900">
                  <p className="text-8xl font-bold">E</p>
                  <p className="text-3xl font-semibold">Environment</p>
                </div>
              </div>
              <div className="w-full md:7/12 lg:w-10/12 lg:pr-10 text-lg text-justify lg:text-2xl font-normal text-gray-900">
                <p className=" mt-6">
                  We acknowledge that our operation affects, and is affected by,
                  the environment. All business segments in our portfolio
                  require energy and resources, as well as general waste and
                  carbon emissions.
                </p>
                <p className=" mt-4 ">
                  At United Tractors, we act responsibly towards our environment
                  in line with Moving as One, as we are committed to sustainable
                  practices and ESG implementation for a better future,
                  including improving our disclosure on environmental
                  footprints, impacts, and efforts to reduce carbon emissions
                  and all other issues that represent substantial risks and
                  opportunities for our stakeholders and shareholders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full px-4 lg:px-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
            <ul className="text-lg font-semibold lg:text-2xl lg:font-semibold lg:space-y-5 list-disc lg:px-16 lg:py-6">
              <li>Reduce group-wide scope 1 and 2 greenhouse gas by 30%</li>
              <li>22% renewable energy to supply operations</li>
              <li>Water management refers to each business unit category</li>
            </ul>
          </div>
        </div>

        <div className="py-40 lg:py-60 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container m-auto lg:px-20  text-gray-600 md:px-12 ">
            <div className="space-y-6 md:space-y-0 lg:flex  lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-3/12">
                <div className="text-center text-gray-900">
                  <p className="text-8xl font-bold">S</p>
                  <p className="text-3xl font-semibold">Social</p>
                </div>
              </div>
              <div className="w-full md:7/12 lg:w-10/12 lg:pr-10 text-justify text-lg lg:text-2xl font-normal text-gray-900">
                <p className=" mt-6 ">
                  The broad social aspect of ESG is reflected in the
                  relationships between United Tractors and its workforce, the
                  societies in which it operates, and the sociodynamics
                  environment. Supporting the social aspect of ESG is embedded
                  in Moving as One. In line with One Spirit, one of our
                  priorities is to nurture harmony with all stakeholders through
                  employee engagement, community empowerment, customer
                  satisfaction, and public relations.
                </p>
                <p className=" mt-4">
                  In this sense, we can make a difference in trust, confidence,
                  and effective stakeholder engagement. These are fundamental to
                  support our objective: a portfolio transition as a
                  sustainability path to improve people's livelihoods and
                  quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full px-4 lg:px-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
            <ul className="text-lg font-semibold lg:text-2xl lg:font-semibold lg:space-y-5 list-disc lg:px-16 lg:py-6">
              <li>
                Champion actions to support employee diversity, equity, and
                inclusion
              </li>
              <li>
                Achieve group-wide zero workforce fatalities and LTI rate by
                0.093
              </li>
              <li>
                Reach 750,000 people through our community development programs
              </li>
            </ul>
          </div>
        </div>

        <div className="py-40 lg:py-60 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="container m-auto lg:px-20  text-gray-600 md:px-12 ">
            <div className="space-y-6 md:space-y-0 lg:flex lg:items-center lg:gap-12">
              <div className="md:5/12 lg:w-3/12">
                <div className="text-center text-gray-900">
                  <p className="text-8xl font-bold">G</p>
                  <p className="text-3xl font-semibold">Governance</p>
                </div>
              </div>
              <div className="w-full md:7/12 lg:w-10/12  lg:pr-10 text-justify text-lg lg:text-2xl font-normal text-gray-900 ">
                <p className="  mt-6 ">
                  The broad social aspect of ESG is reflected in the
                  relationships between United Tractors and its workforce, the
                  societies in which it operates, and the sociodynamics
                  environment. Supporting the social aspect of ESG is embedded
                  in Moving as One. In line with One Spirit, one of our
                  priorities is to nurture harmony with all stakeholders through
                  employee engagement, community empowerment, customer
                  satisfaction, and public relations.
                </p>
                <p className="  mt-4">
                  In this sense, we can make a difference in trust, confidence,
                  and effective stakeholder engagement. These are fundamental to
                  support our objective: a portfolio transition as a
                  sustainability path to improve people's livelihoods and
                  quality of life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full px-4 lg:px-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
            <ul className="text-lg font-semibold lg:text-2xl lg:font-semibold lg:space-y-5 list-disc lg:px-16 lg:py-6 ">
              <li>
                Increase our business resilience by growing non-coal revenues to
                50%
              </li>
              <li>
                Champion actions that support board and executive leadership
                diversity and inclusion
              </li>
              <li>
                Continue to strengthen our corporate governance to international
                standards
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      {/* <div className="pt-40 bg-slate-50"></div> */}
    </>
  );
};

export default Esg;
