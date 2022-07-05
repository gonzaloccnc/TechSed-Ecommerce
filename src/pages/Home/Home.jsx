import MainSlide from './MainSlide'
import SalesCards from './SalesCards'

const Home = () => {
  return (
    <>
      <section className='w-full h-[90vh] bg-home-slide1 bg-cover grid place-content-center bg-no-repeat'>
        <MainSlide />
      </section>
      <section className='grid grid-cols-2 justify-items-center'>
        <SalesCards des1='Holiday Deals' des2='Selected Smartphone Brands' title='Up to 30% off' bg='card-column' />
        <SalesCards des1='Just In' des2='Top Headphone Brands' title='Take Your Sound Anywhere' bg='card-column2' />
      </section>
    </>
  )
}

export default Home
