import React, { useEffect } from "react";
import BackgroundOverlay from "../../../components/Fragments/BackgroundOverlay";
import { amalik, ari, background17, haryono, leo } from "../../../assets";

const Boards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const title = "Boards Of Director";
  return (
    <>
      <main className="h-full w-full">
        <BackgroundOverlay content={title} gambar={background17} />

        {/* <div className="md:grid md:grid-cols-3 xl:mx-32 xl:my-36">
          <div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div>
          <div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div><div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div><div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div><div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div><div className=" mb-10 mx-10 ">
            <img alt="bod" src="https://media.licdn.com/dms/image/C4D03AQEqzjajv3iVAw/profile-displayphoto-shrink_800_800/0/1653922129324?e=2147483647&v=beta&t=K-hKoEBg7KDXIpL5mp1k58cONMMD7NNM9FUes7pXbSI" />
            <div className="bg-gray-200 text-center h-16">
              <h3 className="font-bold md:text-base md:pt-3">Diana Pandu Pratama</h3>
              <p className="-mt-1 ">Human Resource</p>
            </div>
          </div>
        </div> */}
        <div className="-mt-20 pb-20 bg-slate-50">
          {/* <p className="text-3xl py-10 font-bold lg:pt-20 lg:font-bold lg:text-5xl text-center lg:px-40">
            Board Of Director
          </p> */}
          {/* <hr className="w-[30%]  mx-auto" /> */}
          <div class="pb-20 lg:pb-24 pt-24 lg:pt-24 bg-gradient-to-b from-slate-50 to-slate-100">
            <div class="container m-auto lg:px-20  text-gray-600 md:px-12 ">
              <div class="space-y-6 md:space-y-0 md:flex md:gap-10 lg:flex  lg:gap-12">
                <div class="md:w-5/12 lg:w-6/12 xl:w-5/12 ">
                  <div className=" mb-10 mx-10 ">
                    <img className="aspect-square" alt="bod" src={ari} />
                    <div className="bg-gray-200 text-center pb-3 h-full">
                      <h3 className="font-bold text-xl md:text-lg py-2 uppercase tracking-[1px]">
                        Arie Sasongko
                      </h3>
                      <p className="-mt-1 text-base font-medium md:text-sm lg:text-base ">
                        President Director
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-7/12 lg:w-10/12 lg:pr-10 text-lg text-justify md:text-base lg:text-2xl lg:-mt-10 font-normal  text-gray-900">
                  <p class="mt-3 text-2xl text-center md:text-left lg:text-3xl font-bold">
                    Arie Sasongko
                  </p>
                  <p class="mt-4">
                    Bergabung pada United Tractors group pada tahun 2001, saat
                    ini beliau menjadi President Direktur PT Dian Pandu Pratama
                    sekaligus Division Head HCGSESR di PT United Tractors Pandu
                    Engineering. Pernah berkarya juga di PT Universal Tekno
                    Reksajaya pada tahun 2012 sampai 2020 menjabat sebagai
                    Deputy HFAIT Division Head dan HFAIT Division Head.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100">
            <div class="container m-auto lg:px-20  text-gray-600 md:px-12 ">
              <div class="space-y-6 md:space-y-0 md:flex md:gap-10 lg:flex  lg:gap-12">
                <div class="md:w-5/12 lg:w-6/12 xl:w-5/12 ">
                  <div className=" mb-10 mx-10 ">
                    <img className="aspect-square" alt="bod" src={amalik} />
                    <div className="bg-gray-200 text-center pb-3 h-full">
                      <h3 className="font-bold text-xl md:text-lg py-2 uppercase tracking-[1px]">
                        Amalik
                      </h3>
                      <p className="-mt-1 text-base font-medium md:text-sm lg:text-base ">
                        Director of HCGAEHSCSR, Legal MS & IT
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-7/12 lg:w-10/12 lg:pr-10 text-lg text-justify md:text-base lg:text-2xl lg:-mt-10 font-normal  text-gray-900">
                  <p class="mt-3 text-2xl text-center md:text-left lg:text-3xl font-bold">
                    Amalik
                  </p>
                  <p class="mt-4">
                    We acknowledge that our operation affects, and is affected
                    by, the environment.
                  </p>
                  <p class=" mt-4 ">
                    At United Tractors, we act responsibly towards our
                    environment in line with Moving as One, as we are committed
                    to sustainable practices and ESG implementation for a better
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100">
            <div class="container m-auto lg:px-20  text-gray-600 md:px-12 ">
              <div class="space-y-6 md:space-y-0 md:flex md:gap-10 lg:flex  lg:gap-12">
                <div class="md:w-5/12 lg:w-6/12 xl:w-5/12 ">
                  <div className=" mb-10 mx-10 ">
                    <img className="aspect-square" alt="bod" src={leo} />
                    <div className="bg-gray-200 text-center pb-3 h-full">
                      <h3 className="font-bold text-xl md:text-lg py-2 uppercase tracking-[1px]">
                        Leomahesa Hirawan
                      </h3>
                      <p className="-mt-1 text-base font-medium md:text-sm lg:text-base ">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-7/12 lg:w-10/12 lg:pr-10 text-lg text-justify md:text-base lg:text-2xl lg:-mt-10 font-normal  text-gray-900">
                  <p class="mt-3 text-2xl text-center md:text-left lg:text-3xl font-bold">
                    Leomahesa Hirawan
                  </p>
                  <p class="mt-4">
                    Bergabung pada PT United Tractors Pandu Engineering pada
                    tahun 2012, saat ini beliau menjadi Direktur PT Dian Pandu
                    Pratama sekaligus menjabat sebagai General Manager di PT
                    United Tractors Pandu Engineering. Saat ini beliau juga
                    aktif menjadi Tax Advisor untuk YKBUT & Kanitra Group.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100">
            <div class="container m-auto lg:px-20  text-gray-600 md:px-12 ">
              <div class="space-y-6 md:space-y-0 md:flex md:gap-10 lg:flex  lg:gap-12">
                <div class="md:w-5/12 lg:w-6/12 xl:w-5/12 ">
                  <div className=" mb-10 mx-10 ">
                    <img className="aspect-square" alt="bod" src={haryono} />
                    <div className="bg-gray-200 text-center pb-3 h-full">
                      <h3 className="font-bold text-xl md:text-lg py-2 uppercase tracking-[1px]">
                        YFX Haryono Sulistio
                      </h3>
                      <p className="-mt-1 text-base font-medium md:text-sm lg:text-base ">
                        Director
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-7/12 lg:w-10/12 lg:pr-10 text-lg text-justify md:text-base lg:text-2xl lg:-mt-10 font-normal  text-gray-900">
                  <p class="mt-3 text-2xl text-center md:text-left lg:text-3xl font-bold">
                    YFX Haryono Sulistio
                  </p>
                  <p class="mt-4">
                    Bergabung pada PT United Tractors Pandu Engineering pada
                    tahun 1988, saat ini beliau menjadi Direktur PT Dian Pandu
                    Pratama dan pernah menjabat sebagai Subcont Development
                    Department Head di PT United Tractors Pandu Engineering.
                    Saat ini beliau juga menjalankan organisasi dari PT United
                    Tractors Pandu Engineering yaitu Koperasi Pra dan Purna
                    Bhakti PATRIA sebagai Ketua Umum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="py-40 lg:py-60 bg-gradient-to-b from-slate-50 to-slate-100">
            <div class="container m-auto lg:px-20  text-gray-600 md:px-12 ">
              <div class="space-y-6 md:space-y-0 lg:flex lg:items-center lg:gap-12">
                <div class="md:5/12 lg:w-3/12">
                  <div className="text-center text-gray-900">
                    <p className="text-8xl font-bold">G</p>
                    <p className="text-3xl font-semibold">Governance</p>
                  </div>
                </div>
                <div class="w-full md:7/12 lg:w-10/12  lg:pr-10 text-justify text-lg lg:text-2xl font-normal text-gray-900 ">
                  <p class="  mt-6 ">
                    The broad social aspect of ESG is reflected in the
                    relationships between United Tractors and its workforce, the
                    societies in which it operates, and the sociodynamics
                    environment. Supporting the social aspect of ESG is embedded
                    in Moving as One. In line with One Spirit, one of our
                    priorities is to nurture harmony with all stakeholders
                    through employee engagement, community empowerment, customer
                    satisfaction, and public relations.
                  </p>
                  <p class="  mt-4">
                    In this sense, we can make a difference in trust,
                    confidence, and effective stakeholder engagement. These are
                    fundamental to support our objective: a portfolio transition
                    as a sustainability path to improve people's livelihoods and
                    quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
};
export default Boards;
