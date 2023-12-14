import React, { useEffect, useState } from "react";
import BackgroundOverlay from "../../components/Fragments/BackgroundOverlay";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { backgroundnews } from "../../assets";

export const News = () => {
  const data = "Berita";
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
    window.scrollTo(0, 0);
  }, []);

  const getNews = async () => {
    const response = await axios.get(
      "https://dpp.co.id:5000/upload?category=news"
    );
    setNews(response.data.reverse());
  };

  const navigate = useNavigate();

  const _renderNews = () => {
    return (
      <>
        {news.map((news) => {
          return (
            <div className="w-full space-x-10 md:w-1/2 lg:w-1/3" key={news.id}>
              <div className="mx-auto mb-10 lg:max-w-[300px] xl:max-w-[370px]">
                <div className="mb-5 overflow-hidden rounded">
                  <img
                    src={news.url}
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
                    }).format(new Date(news.createdAt))}
                  </span>
                  <h3>
                    <a
                      href="/"
                      className="text-dark hover:text-primary mb-3 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-[22px]"
                    >
                      {news.judul}
                    </a>
                  </h3>
                  <p className="text-body-color text-base mb-2 line-clamp-2">
                    {news.desc}
                  </p>
                  <Button
                    className="-ml-4"
                    color="#fff"
                    onClick={() => navigate(`/detail/${news.id}`)}
                  >
                    <p className="font-semibold text-base">Selengkapnya</p>
                    <HiOutlineArrowRight className="ml-2 h-5 w-4 mt-1" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className="w-full h-full justify-center mb-10 overflow-x-hidden ">
      <BackgroundOverlay content={data} gambar={backgroundnews} />
      {/* card news  */}
      <div className="mx-auto p-3 xl:px-32 lg:gap-0 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        {_renderNews()}
      </div>
    </main>
  );
};
