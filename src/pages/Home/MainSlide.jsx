import Button from '../../components/button/Button'

const MainSlide = () => {
  return (
    <section className='w-full h-[90vh] bg-home-slide1 bg-cover grid place-content-center bg-no-repeat mt-[164.5px]'>
      <div className='-translate-x-1/2'>
        <p className='bg-red-700 inline-flex text-white px-2 text-lg'>Best Prices</p>
        <h2 className='my-5 text-6xl font-semibold tracking-wide leading-em'>Incredible Prices<br />on All Your<br />Favorites Items</h2>
        <p className='text-xl font-light'>Ger more for less on selected brands</p>
        <div className='my-5'>
          <Button w='w-48' path='shop/shopAll'>Shop Now</Button>
        </div>
      </div>
    </section>
  )
}

export default MainSlide
