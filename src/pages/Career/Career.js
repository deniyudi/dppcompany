import React, { useEffect, useState } from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import { background10, logodpp } from "../../assets";
import { Button } from "flowbite-react";
import "../../../node_modules/reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";
import "../../../node_modules/react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = "Karir";

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <BackgroundOverlay content={data} gambar={background10} />
      {/* {_renderCareer()} */}

      <div className="w-full h-full xl:px-32 px-5 space-y-10 my-4 overflow-x-hidden">
        <div className=" text-xl font-semibold lg:text-3xl xl:text-4xl lg:font-bold">
          PT Dian Pandu Pratama adalah perusahaan yang bergerak di bidang
          pengelolaan sumber daya manusia, penyedia tenaga kerja (Labour Supply)
          di bidang Welder, Assembler, Painter, Operator serta tenaga
          administrasi.
        </div>
        <hr className="w-full mx-auto border-gray-400" />
        {/* <Popup
          trigger={
            <Button className="px-2" color="failure">
              Apply Here
            </Button>
          }
          modal
          nested
          contentStyle={{ maxHeight: "80vh", overflowY: "auto" }}
        >
          {(close) => (
            <div className="w-full ">
              <div className="px-4 ">
                <button
                  className="float-right text-3xl mt-0 mr-4 font-bold"
                  onClick={close}
                >
                  &times;
                </button>
                <img src={logodpp} className="lg:w-60 my-4" alt="logo" />
              </div>
              <hr className="w-full mx-auto border-gray-400" />
              <div className="lg:text-3xl mt-4 w font-semibold mx-auto text-center">
                Pemberitahuan !
              </div>
              <div className="lg:text-xl mx-auto text-center my-5">
                Hati-hati penipuan terhadap penerimaan karyawan PT Dian Pandu
                Pratama
              </div>
              <div className="space-y-4 p-3 text-justify lg:text-lg">
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
                  href="http://20.205.171.175:8069/jobs"
                  target="_blank"
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
        </Popup> */}
        <Button onClick={onOpenModal} className="px-2" color="failure">
          Apply Here
        </Button>
        <Modal open={open} onClose={onCloseModal} center>
          <div className="w-full ">
            <div className="px-4 ">
              <img src={logodpp} className="lg:w-60 w-40 my-4" alt="logo" />
            </div>
            <hr className="w-full mx-auto border-gray-400" />
            <div className="lg:text-3xl mt-4 text-2xl font-semibold mx-auto text-center">
              Pemberitahuan !
            </div>
            <div className="lg:text-xl font-semibold mx-auto text-center my-5">
              Hati-hati penipuan terhadap penerimaan karyawan PT Dian Pandu
              Pratama
            </div>
            <div className="space-y-4 p-3 text-justify lg:text-lg">
              <p className="">
                Kami, PT Dian Pandu Pratama, dengan ini menghimbau masyarakat
                agar berhati-hati dan mewaspadai modus penipuan recruitment,
                baik seleksi maupun penerimaan karyawan dari oknum yang
                mengatasnamakan PT Dian Pandu Pratama
              </p>
              <p className="">
                PT Dian Pandu Pratama tidak pernah memungut biaya apapun seperti
                transportasi, biaya akomodasi, biaya tes ataupun biaya lainnya.
                Kami juga tidak pernah menunjuk travel agent untuk
                akomodasi/transportasi dalam seleksi penerimaan karyawan.
              </p>
              <p className="">
                Bila anda menerima ajakan/undangan/permintaan konfirmasi yang
                memungut biaya, mohon infokan segera ke (021) 893 5016 ext. 1405
                atau contact@dpp.co.id.
              </p>
            </div>
            <div className="flex space-x-4 p-3 mt-20 float-right">
              <Button
                className="px-2"
                color="failure"
                onClick={() => {
                  onCloseModal()
                }}
              >
                Cancel
              </Button>
              <Button
                href="https://odoo.dpp.co.id/jobs"
                target="_blank"
                className="px-6"
              >
                Lanjut
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Career;
