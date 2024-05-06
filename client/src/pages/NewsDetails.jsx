import React from 'react'
import { useLoaderData } from 'react-router-dom'

const NewsDetails = () => {
  const news = useLoaderData();

  return (
    <>
      <h1>ACTUALIDAD</h1>
      <section className='grid grid-cols-5 gap-5 place-content-center place-items-center'>
        <img src={news.image} alt={news.title} className='col-span-2 object-cover' />
        <section className='col-span-3 place-self-start'>
          <h3>{news.title}</h3>
          <h4>{news.subtitle}</h4>
          <p>{news.content}</p>
        </section>
      </section>

    </>
  )
}

export default NewsDetails