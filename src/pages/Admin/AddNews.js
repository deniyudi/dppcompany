import React, { useState } from "react";
import axios from "axios";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveBerita = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("judul", title);
    formData.append("desc", desc);
    formData.append("category", category);
    try {
      await axios.post("https://dpp.co.id:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // navigate("/news")
    } catch (error) {
      console.log(error.message);
    }

    
  };

  return (
    <>
      <div className="mx-auto w-full max-w-[550px] mt-44">
        <form onSubmit={saveBerita}>
          <div className="mb-5">
            <label
              for="judul"
              className="mb-3 block text-base font-medium text-[#07074D] normal-case"
            >
              Judul
            </label>
            <input
              type="text"
              name="judul"
              id="judul"
              placeholder="Masukkan Judul"
              className="w-full rounded-md border normal-case border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              for="deskripsi"
              className="mb-3 block text-base font-medium text-[#07074D] "
            >
              Deskripsi
            </label>
            <textarea
              rows="5"
              name="deskripsi"
              id="deskripsi"
              placeholder="Masukkan Deskripsi"
              className="w-full resize-none normal-case rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            
            {/* <p>Entered Description: {desc}</p> */}
          </div>
          <div className="mb-5">
            <label
              for="Upload"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Type News & CSR
            </label>
            <select
              id="countries"
              onChange={(e) => setCategory(e.target.value.toLowerCase())}
              className="block w-full text-sm mb-10 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            >
              <option disabled selected>Pilihan</option>
              <option value="news">News</option>
              <option value="csr">CSR</option>
              
            </select>
          </div>
          <div className="mb-5">
            <label
              for="deskripsi"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Upload File
            </label>
            <input
              className="block w-full text-sm mb-10 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              onChange={loadImage}
            />
          </div>
          {preview ? (
            <figure>
              <img src={preview} className="p-5" alt="Preview" />
            </figure>
          ) : (
            ""
          )}
          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNews;
