import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser'
import { dateConverter } from '../helpers/dateConverter';
import Share from '../components/Share';

const NewsDetails = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [metaAdded, setMetaAdded] = useState(false);
  const news = useLoaderData();
  const categories = news.category.split(",");
  const head = document.querySelector('head')

  useEffect(() => {
    if (news) {
      if (!metaAdded) {
        setMetaAdded(true);
        head.innerHTML +=
          `
        <meta property="description" content="${news.title}" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="New Value" />
        <meta property="og:description" content="${news.subtitle}" />
        <meta property="og:title" content="${news.title}" />
        <meta property="og:url" content="${window.location.href}" />
        <meta property="og:image" content="${news.image}" />
        `
        console.log(head);
      }

      setLoadingData(false)
    }
  }, [loadingData]);

  return (
    <>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      {loadingData && <h3>Cargando</h3>}
      <section className='flex-col md:grid grid-cols-9 gap-12 place-content-center place-items-center'>
        <img src={news.image} alt={news.title} className='col-span-4 object-cover place-self-start h-full max-h-[700px] mb-6' />
        <div className='col-span-5 place-self-start flex flex-col gap-5'>
          <p className='text-xs'>{dateConverter(news.date)}</p>
          <h1 className='font-semibold'>{news.title}</h1>
          {news.subtitle && <h3 className='font-normal'>{news.subtitle}</h3>}
          <div>{parse(news.content)}</div>
          {categories &&
            <div className='flex gap-5'>
              {categories.map((category, index) =>
                <a key={index} className={category ? "cursor-pointer self-center text-xs border-2 rounded py-1 px-2 hover:bg-gray-200 transition duration-300 ease-in-out" : "hidden"}>
                  {category}
                </a>)}
            </div>
          }
          <hr />
          <Share description={news.title} url={window.location.href} imageUrl={news.image} />
        </div>

      </section>
    </>
  )
}

export default NewsDetails