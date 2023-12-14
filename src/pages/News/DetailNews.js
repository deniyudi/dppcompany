import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { logodpp } from "../../assets";

export const DetailNews = () => {
  const [news, setNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getNews = async () => {
      try {
        const response = await axios.get(`https://dpp.co.id:5000/upload/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    if (id) {
      getNews();
    }
  }, [id]);

  // Split Desc
  const splitTextIntoParagraphs = (text) => {
    if (!text) return [];
    const sentences = text.split(". "); // Mungkin perlu menyesuaikan berdasarkan pemisah kalimat yang sesuai
    const paragraphs = [];
    while (sentences.length > 0) {
      paragraphs.push(sentences.splice(0, 2).join(". "));
    }
    return paragraphs;
  };

  const paragraphs = splitTextIntoParagraphs(news.desc);

  // Format tanggal
  let formattedDate = "";

  if (news.createdAt) {
    const dateObject = new Date(news.createdAt);

    if (!isNaN(dateObject.getTime())) {
      formattedDate = new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(dateObject);
    } else {
      console.error("Invalid date format:", news.createdAt);
    }
  }

  return (
    <main className="h-full w-full mt-10 lg:mt-20 overflow-x-hidden">
      <div className="grid px-10 lg:w-[54%] mx-auto ">
        <div className="mx-auto text-center mt-20 ">
          <p className="mt-3 mb-6 text-3xl lg:text-4xl  font-semibold leading-10 text-[#222222]">
            {news.judul}
          </p>
          <p className="text-base font-normal leading-snug tracking-normal text-[#333333]">
            {formattedDate}
          </p>
        </div>
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent mt-10 bg-clip-border aspect-square bg-gradient-to-r from-[#f6f5f5a4] to-[#e9e9e9]  text-gray-700 shadow-none flex items-center justify-center ">
          <img src={news.url} alt="kiw" className="" />
          <div className="absolute top-3 right-3 w-20 md:top-4 md:right-4 md:w-36 lg:top-5 lg:right-5 lg:w-40 px-3 py-1  bg-slate-50 rounded-full ">
            <img src={logodpp} alt="logo" className="" />
          </div>
        </div>
        <div className="my-12 text-[#333333] font-normal text-xl text-justify space-y-10 ">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
};
