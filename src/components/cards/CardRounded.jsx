import React from 'react'
import { Link } from 'react-router-dom'

const CardRounded = ({ category, categoryImg, path }) => {
  return (
    <div className='text-center'>
      <Link to={path}>
        <div className='w-full h-[160px] rounded-full overflow-hidden'>
          <img
            src={categoryImg}
            className='w-full h-full rounded-full bg-mycolor hover:scale-125 transition-all ease-soft duration-[2.2s]'
          />
        </div>
        <p className='text-xl font-semibold mt-3'>{category}</p>
      </Link>
    </div>
  )
}

export default CardRounded
