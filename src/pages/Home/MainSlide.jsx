import { useRef, useEffect, useState } from 'react'
import Button from '../../components/button/Button'

const MainSlide = () => {
  const images = ['bg-home-slide1', 'bg-home-slide2', 'bg-home-slide3']
  const [slide, setSlide] = useState(images[0])
  const slideRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      slideRef.current.classList.add('opacity-0')
      setTimeout(() => {
        slideRef.current.classList.remove('opacity-0')
        setSlide(images[(images.indexOf(slide) + 1) % images.length])
      }, 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [slide])

  return (
    <section className='relative w-full h-[90vh] grid place-content-center bg-no-repeat mt-[164.5px]'>
      <div
        className={`absolute ${slide} w-full h-full top-0 bg-center bg-cover transition-opacity ease-easeInOut`}
        ref={slideRef}
      />
      <div className='-translate-x-1/2'>
        <p className='bg-red-700 inline-flex text-white px-2 text-lg'>Best Prices</p>
        <h2 className='my-5 text-6xl font-semibold tracking-wide leading-em'>
          Incredible Prices<br />on All Your<br />Favorites Items
        </h2>
        <p className='text-xl font-light'>Ger more for less on selected brands</p>
        <div className='my-5'>
          <Button w='w-48' path='shop/shopAll'>Shop Now</Button>
        </div>
      </div>
    </section>
  )
}

export default MainSlide
