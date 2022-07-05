import { Link } from 'react-router-dom'

const MainSlide = () => {
  return (
    <div className='-translate-x-1/2'>
      <p className='bg-red-700 inline-flex text-white px-2 text-lg'>Best Prices</p>
      <h2 className='my-5 text-6xl font-semibold tracking-wide leading-em'>Incredible Prices<br />on All Your<br />Favorites Items</h2>
      <p className='text-xl font-light'>Ger more for less on selected brands</p>
      <Link
        className='mt-5 text-white bg-purple-600 inline-flex px-16 py-3 rounded-full hover:bg-black transition duration-300 ease-freeze'
        to='/shop/shopAll'
      >Shop Now
      </Link>
    </div>
  )
}

export default MainSlide
