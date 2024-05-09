import React from 'react'
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser'

const NewsDetails = () => {
  const news = useLoaderData();

  return (
    <>
      <h1 className="font-semibold text-lg mb-5">ACTUALIDAD</h1>
      <section className='flex-col md:grid grid-cols-9 gap-12 place-content-center place-items-center'>
        <img src={news.image} alt={news.title} className='col-span-4 object-cover place-self-start h-full max-h-[700px] mt-2' />
        <div className='col-span-5 place-self-start'>
          <h3 className='font-semibold text-lg'>{news.title}</h3>
          <h4 className='mb-5'>{news.subtitle}</h4>
          <p>{parse(news.content)}</p>
          <a href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fdev.to%2Fmatteosant_dev%2Fnew-web-portfolio-16bit-os-style-20h9%3Fref%3Ddailydev">Compartir en LinkedIn</a>
        </div>
      </section>
    </>
  )
}

export default NewsDetails