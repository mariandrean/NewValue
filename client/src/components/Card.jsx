import React from 'react'

export const Card = ({news}) => {
  return (
    <>
      <img src={news.image} alt={news.title} />
      <h3 className='font-semibold'>{news.title}</h3>
      <h4>{news.subtitle}</h4>
    </>
  )
}
export default Card;