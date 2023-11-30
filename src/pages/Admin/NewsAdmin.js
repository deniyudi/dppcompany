import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsAdmin = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await axios.get("http://20.205.171.175:5000/upload");
    setNews(response.data);
  };

  const deleteNews = async (newsId)=>{
    try {
        await axios.delete(`http://20.205.171.175:5000/upload/${newsId}`);
        getNews();
    } catch (error) {
        console.log(error);
    }
  }

  const _renderNews = () => {
    return (
      <>
        {news.map((news) => {
          return (
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              className="rounded shadow-lg text-black text-left mb-9 sm:mb-0 sm:w-64 md:w-80 lg:w-72 xl:w-96"
              key={news.id}
            >
              <img
                src={news.url}
                alt="news"
                className="w-full rounded-t h-2/4 object-cover"
              />
              <div className="px-2 py-2">
                <div className="text-lg sm:text-sm underline font-bold text-left sm:line-clamp-2 lg:line-clamp-2 lg:text-lg xl:sm:line-clamp-none">
                  {news.judul}
                </div>
                <p className="text-[13px] text-gray-400 font-light py-[6px]">
                  {news.createdAt}
                </p>
                <div className="text-sm text-justify mb-1 line-clamp-3 sm:line-clamp-2 ">
                  {news.desc}
                </div>

                <div className="grid-cols-2">
                    <Link to={`/editnews/${news.id}`}>Edit</Link>
                    <button onClick={()=>deleteNews(news.id)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className="w-full h-full justify-center mb-10">
      {/* card news  */}
      <div className="mt-32 mx-auto p-3 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center">
        {_renderNews()}
      </div>
    </main>
  );
};

export default NewsAdmin;
