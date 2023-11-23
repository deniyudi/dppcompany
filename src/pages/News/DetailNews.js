import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

export const DetailNews = () => {

  const [news, setNews] = useState({});
  const { id } = useParams();

  useEffect(() => {
      window.scrollTo(0, 0);
    const getNews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/upload/${id}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };

    if (id) {
      getNews();
    }
  }, [id]);


  return (
    <main className='h-full w-full mt-10 lg:mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2  md:p-[100px] lg:p-[90px]'>
        <div className='px-12 pt-16 mx-auto grid gap-y-5 md:p-0 md:block lg:pr-0 xl:px-[40px] xl:py-3'>
          <img src={news.url} alt='gambar' className='aspect-video md:mb-4 md:w-[520px]'/>
          {/* <img src={news.img1} alt='gambar' className='aspect-video mb-3 md:w-[520px]'/> */}
        </div>
        <div className='p-4 md:py-0  xl:p-0 xl:pr-10'>
          <h2 className='mb-6 font-semibold text-3xl'>{news.judul}</h2>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{news.desc}</p>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{news.desc}</p>
          <p className='mb-4 text-justify md:text-sm lg:text-base'>{news.desc}</p>
        </div>
      </div>
    </main>
  )
}
