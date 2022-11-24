import { useRef, useEffect, useState } from 'react'

import Button from '../../components/button/Button'

const slides = new Map([[1, 'bg-home-slide1'], [2, 'bg-home-slide2'], [3, 'bg-home-slide3']])

const MainSlide = () => {
  const [slide, setSlide] = useState(1)
  const slideRef = useRef(null)
  const slideChange = slides.get(slide)

  useEffect(() => {
    if (slide > 3) {
      setSlide(1)
    } else {
      setTimeout(() => {
        slideRef.current.style.opacity = 0.3
      }, 5800)

      setTimeout(() => {
        slideRef.current.style.opacity = 1
        setSlide(state => ++state)
      }, 6000)
    }
  }, [slide])

  return (
    <section className='relative w-full h-[90vh] grid place-content-center bg-no-repeat mt-[164.5px]'>
      <div
        className={`absolute ${slideChange} w-full h-full top-0 bg-center bg-cover transition-opacity ease-easeInOut`}
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
