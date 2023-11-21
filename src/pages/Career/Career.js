import React from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { background10, logodpp } from "../../assets";
import { Button } from "flowbite-react";
import "../../../node_modules/reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

const Career = () => {
  const data = "Karier";

  return (
    <>
      <BackgroundOverlay content={data} gambar={background10} />
      {/* {_renderCareer()} */}

      <div className="w-full h-full lg:px-32 px-5 space-y-10 my-4">
        <div className=" text-xl font-semibold lg:text-4xl lg:font-bold">
          PT Dian Pandu Pratama adalah perusahaan yang bergerak di bidang
          pengelolaan sumber daya manusia, penyedia tenaga kerja (Labour Supply)
          di bidang Welder, Assembler, Painter, Operator serta tenaga
          administrasi.
        </div>
        <hr className="w-full mx-auto border-gray-400" />
        <Popup
          trigger={
            <Button className="px-2" color="failure">
              Apply Here
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="">
              <div className="px-4">
                <button
                  className="float-right text-3xl mt-0 mr-4 font-bold"
                  onClick={close}
                >
                  &times;
                </button>
                <img src={logodpp} className="w-60 my-4" alt="logo" />
              </div>
              <hr className="w-full mx-auto border-gray-400" />
              <div className="text-3xl mt-4 font-semibold mx-auto text-center">
                Pemberitahuan !
              </div>
              <div className="text-xl mx-auto text-center my-5">
                Hati-hati penipuan terhadap penerimaan karyawan PT Dian Pandu
                Pratama
              </div>
              <div className="space-y-4 p-3 text-justify text-lg">
                <p className="">
                  Kami, PT Dian Pandu Pratama, dengan ini menghimbau masyarakat
                  agar berhati-hati dan mewaspadai modus penipuan recruitment,
                  baik seleksi maupun penerimaan karyawan dari oknum yang
                  mengatasnamakan PT Dian Pandu Pratama
                </p>
                <p className="">
                  PT Dian Pandu Pratama tidak pernah memungut biaya apapun
                  seperti transportasi, biaya akomodasi, biaya tes ataupun biaya
                  lainnya. Kami juga tidak pernah menunjuk travel agent untuk
                  akomodasi/transportasi dalam seleksi penerimaan karyawan.
                </p>
                <p className="">
                  Bila anda menerima ajakan/undangan/permintaan konfirmasi yang
                  memungut biaya, mohon infokan segera ke (021) 893 5016 ext.
                  1405 atau contact@dpp.co.id.
                </p>
              </div>
              <div className="flex space-x-4 p-3 mt-20 float-right">
                <Button
                  className="px-2"
                  color="failure"
                  onClick={() => {
                    close();
                  }}
                >
                  Cancel
                </Button>
                <Button
                href="http://20.205.171.175:8069/jobs" target="_blank"
                  className="px-6"
                  onClick={() => {
                    close(); 
                  }}
                >
                  Lanjut
                </Button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </>
  );
};

export default Career;
