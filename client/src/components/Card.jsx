import React from 'react'

export const Card = ({news, index}) => {
  return (
    <article className='flex flex-col gap-3'>
      <img src={news.image} alt={news.title} />
      <h3 className={'font-semibold '+ (index == 0 ? "text-xl" : "text-sm")}>{news.title}</h3>
      <h4 className={index!==0 && "hidden"}>{news.subtitle}</h4>
      <p className='text-xs'>{news.date}</p>
    </article>
  )
}
export default Card;