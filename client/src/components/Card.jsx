import React from 'react'
import { Link } from 'react-router-dom';

export const Card = ({ news, index }) => {
  return (
    <Link to={`/news/${news.id}`} className='flex flex-col gap-3' >
      <img src={news.image} alt={news.title} />
      <h3 className={'font-semibold ' + (index == 0 ? "text-xl" : "text-sm")}>{news.title}</h3>
      <h4 className={(index > 0) ? "hidden" : undefined}>{news.subtitle}</h4>
      <p className='text-xs'>{news.date}</p>
    </Link>
  )
}
export default Card;