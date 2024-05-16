import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser'
import { dateConverter } from '../helpers/dateConverter';

const NewsDetails = () => {
  const [loadingData, setLoadingData] = useState(true);
  const news = useLoaderData();
  console.log(news.categories)
  news.categories = news.category?.split(",");
  
  useEffect(() => {
    if (news) {
      setLoadingData(false)
    }
  }, [loadingData]);

  return (
    <>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      <section className='flex-col md:grid grid-cols-9 gap-12 place-content-center place-items-center'>
        <img src={news.image} alt={news.title} className='col-span-4 object-cover place-self-start h-full max-h-[700px] mb-6' />
        <div className='col-span-5 place-self-start'>
          <p className='text-xs mb-3'>{dateConverter(news.date)}</p>
          <h3 className='font-semibold text-lg'>{news.title}</h3>
          <h4 className='mb-5'>{news.subtitle}</h4>
          <p>{parse(news.content)}</p>
          {
            news.categories[0] && <div className='flex gap-5 my-5'>
              {news.categories.map((category, index) => <a key={index} className="cursor-pointer self-center text-xs border-2 rounded py-1 px-2 hover:bg-gray-200 transition duration-300 ease-in-out">{category}</a>)}
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default NewsDetails