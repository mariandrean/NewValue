import React from 'react'
import { Link } from 'react-router-dom';
import { dateConverter } from '../helpers/dateConverter';

export const Card = ({ news, index }) => {
  return (
    <Link to={`/news/${news.id}`} className='flex flex-col gap-3 h-full' >
      <img src={news.image} alt={news.title} className={"object-cover " + (index == 0 ? "aspect-[6/7]" : "aspect-[5/4]")} />
      <div className='flex flex-col gap-1'>
        <h2 className={'font-semibold ' + (index == 0 ? "text-xl" : "text-sm")}>
          {news.title.length < 70 ? news.title : (news.title?.slice(0, 90) + "...")}
        </h2>
        {
          <p className={(index == 0 ? "text-l" : "text-sm")}>
          {news.subtitle.length < 70 ? news.subtitle : (news.subtitle?.slice(0, 90) + "...")}  
          </p>
        }
        <p className={'text-xs'}>{dateConverter(news.date)}</p>
      </div>
    </Link>
  )
}
export default Card;