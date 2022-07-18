import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ product, desc, price, offer }) => {
  return (
    <div className='border border-mycolor flex flex-col p-2 gap-5 relative'>
      {
        offer
          ? <p className='z-40 bg-red-600 absolute text-white px-3 top-0 left-0'>SALE</p>
          : ''
      }
      <Link to='/products/' className='h-full'>
        <div className='overflow-hidden w-full'>
          <img src={product} className='object-cover hover:scale-125 transition-all ease-freeze' />
        </div>
        <div>
          <p className='w-[90%]'>{desc}</p>
          <div className='text-xl flex gap-2 mt-2 text-purple-2'>
            <span className={offer ? 'line-through' : ''}>${price}</span>
            {
              offer ? <span>${offer}</span> : ''
            }
          </div>
        </div>
      </Link>
    </div>

  )
}

export default Card
