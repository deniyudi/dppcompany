import React from "react";
import GroupCompany from "../../assets/About/group.png";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { about, background7,} from "../../assets";

const About = () => {
  const title = "Tentang Kami";
  return (
    <>
      <main className="h-full w-full bg-white">
        <BackgroundOverlay content={title} gambar={background7} />

        {/* <Herosection content={title}/> */}

        <div className="text-center py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-[10%]">
            <div class="py-6 px-5 lg:px-0 lg:pr-6 flex items-center justify-center">
              <img
                className="lg:rounded--[50px] rounded-lg aspect-video"
                src={about}
                alt="hoe"
              />
            </div>
            <div
              className=" text-left w-auto ml-5 pt-5"
            >
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                about us
              </p>
              <p className="font-semibold text-3xl mt-1 mb-4 md:text-center lg:text-left  text-gray-700">
                PT Dian Pandu Pratama
              </p>
              {/* <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                PT Dian Pandu Pratama{" "}
              </p> */}
              <p className="pr-2 mb-3">
                PT Dian Pandu Pratama adalah perusahaan yang berdiri sejak tahun
                2012 dan bergerak dalam bidang Job & Labour Supply. Manpower
                kami telah tersebar di berbagai daerah Kalimantan & Sumatera
                dengan jumlah lebih dari 2000. Komitmen kami adalah mengutamakan
                kepuasan para pelanggan dan memberikan pelayan yang terbaik yang
                didukung para teknisi yang berpengalaman serta menggunakan mesin
                & peralatan yang lengkap.
              </p>
            </div>
          </div>
        </div>

        {/* <hr className="w-[80%] mx-auto" /> */}

        {/* smart  */}
        <div className="text-center bg-white py-20 ">
          <p
            className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            Our Culture
          </p>
          <p
            className="font-bold text-5xl text-red-600 tracking-[10px]"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            S.M.A.R.T
          </p>

          <hr className="w-[30%] mt-10 mx-auto" />
          {/* <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
            Satisfaction - Morale - Adaptability - Responsibility - Teamwork
          </p> */}
          <div class="bg-white sm:py-0 lg:pb-20 lg:pt-0">
            <div
              class="mx-auto max-w-7xl px-6 lg:px-8"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <div class="mx-auto space-y-3 mt-10 grid max-w-lg items-center gap-x-8 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Satisfaction
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600" />
                  <p className="text-base text-gray-500">
                    Memberikan kepuasan penuh kepada pelanggan
                  </p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Morale
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600" />
                  <p className="text-base text-gray-500">
                    Memiliki semangat juang yang tinggi dan berintegritas
                  </p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Adaptability
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600" />
                  <p className="text-base text-gray-500">
                    Memahami keinginan pelanggan yang bersifat fleksibel
                  </p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Responsibility
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600" />
                  <p className="text-base text-gray-500">
                    Bekerja dengan penuh tanggung jawab
                  </p>
                </div>
                <div class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 space-y-2">
                  <p className="font-medium text-center text-lg mt-1 uppercase text-gray-700 tracking-[2px]">
                    Team Work
                  </p>
                  <hr className="w-[22%] mx-auto border-red-600" />
                  <p className="text-base text-gray-500">
                    Menjunjung tinggi nilai-nilai kerjasama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[80%] mx-auto" />

        {/* group company  */}

        <div className="text-center bg-white  py-10 ">
          <p
            className="text-lg font-normal uppercase mb-3 text-gray-500 tracking-[4px]"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            Group Company
          </p>
          <img
            data-aos="fade-in"
            data-aos-duration="2000"
            className="lg:w-[40%] mt-5 my-2 bg-white mx-auto"
            src={GroupCompany}
            alt="branch"
          />
        </div>

        {/* <hr className="w-[80%] mx-auto" /> */}

        {/* jam kerja  */}

        <div className="text-center ml-5 lg:ml-0 py-10">
          {/* <p className="text-3xl font-bold mb-5">OUR NETWORK</p> */}
          <div className="xl:grid grid lg:grid-cols-2 xl:grid-cols-2 justify-items-center lg:px-[10%]">
            <div className=" text-left w-auto  pt-5 pr-6" data-aos="fade-up" data-aos-duration="2000">
              <p className="text-base font-normal uppercase mb-4 md:text-center lg:text-left text-gray-500 tracking-[4px] ">
                Operational
              </p>
              <p className="text-3xl font-semibold mb-4 md:text-center lg:text-left ">
                Jam Kerja
              </p>
              <p className="pr-2 mb-3 text-justify">
                PT Dian Pandu Pratama operasional Jam kerja untuk bagian Office
                bekerja pada Hari Senin sampai dengan Jumat, dimulai dari jam
                7.30 sampai dengan 16.30, kecuali di hari jumat selesai di jam
                17.00 WIB. Pada hari Sabtu dan Minggu plant operation tetap
                masuk pada hari tersebut dimuali dari jam 7.30 sampai dengan
                15.30 WIB. Untuk area site, pekerja akan mengikuti sesuai
                regulasi rooster dan jam kerja yang ada di sana.
              </p>
            </div>
            <div class="py-6 px-5 lg:px-0 pr-10 lg:pr-6 flex ">
              <img
              data-aos="fade-left" data-aos-duration="2000"
                className="rounded-lg aspect-video"
                src="https://www.dpp.co.id/wp-content/uploads/2022/04/IMG_6306-768x512.jpg"
                alt="hoe"
              />
            </div>
          </div>
        </div>

        <hr className="w-[80%] mx-auto" />

        
      </main>
    </>
  );
};

export default About;
