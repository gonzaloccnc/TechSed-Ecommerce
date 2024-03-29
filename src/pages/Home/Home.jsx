import { MdOutlineDeliveryDining, MdOutlineLocalOffer } from 'react-icons/md'
import { AiOutlineFieldTime } from 'react-icons/ai'
import ContainerSellerCard from './ContainerSellerCard'
import ContainerCategory from './ContainerCategory'
import BusinessFeatures from './BusinessFeatures'
import ContainerSales from './ContainerSales'
import { GoPackage } from 'react-icons/go'
import SalesCards from './SalesCards'
import { motion } from 'framer-motion'
import Subscribe from '../../components/Subscribe/Subscribe'
import MainSlide from './MainSlide'
import Button from '../../components/button/Button'
import Brand from './Brand'
import horizon from '../../assets/HomeImages/brands/horizon.png'
import zodiac from '../../assets/HomeImages/brands/zodiac.png'
import zoro from '../../assets/HomeImages/brands/zoro.png'
import pjk from '../../assets/HomeImages/brands/pjk.png'
import gxl from '../../assets/HomeImages/brands/gxl.png'

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MainSlide />
      <section className='grid grid-cols-2 justify-items-center my-10'>
        <SalesCards
          des1='Holiday Deals'
          cHover
          des2='Selected Smartphone Brands'
          title='Up to'
          separator='30% off'
          bg='bg-card-column'
          path='shop/sale'
        />
        <SalesCards
          des1='Just In'
          des2='Top Headphone Brands'
          title='Take Your'
          separator='Sound'
          separator2='Anywhere'
          bg='bg-card-column2'
          cHover={false}
          path='shop/audio/headphones'
        />
      </section>
      <section className='flex bg-white h-48 w-[95%] mx-auto'>
        <BusinessFeatures top='Curb-side' bottom='pickup'>
          <MdOutlineDeliveryDining fontSize='55' />
        </BusinessFeatures>
        <BusinessFeatures top='Free shipping on' bottom='orders over $50'>
          <GoPackage fontSize='55' />
        </BusinessFeatures>
        <BusinessFeatures top='Low prices' bottom='guaranteed'>
          <MdOutlineLocalOffer fontSize='55' />
        </BusinessFeatures>
        <BusinessFeatures top='Available to' bottom='you 24/7'>
          <AiOutlineFieldTime fontSize='55' />
        </BusinessFeatures>
      </section>
      <section className='bg-white w-[95%] mx-auto my-10'>
        <h1 className='text-center text-3xl font-semibold py-14'>Best Sellers</h1>
        <ContainerSellerCard />
        <div className='py-14 grid place-content-center'>
          <Button path='/shop/bestSellers' w='w-64'>View All</Button>
        </div>
      </section>
      <section className='bg-white w-[95%] mx-auto my-10 py-14'>
        <h1 className='text-3xl text-center font-semibold pb-14'>Shop by Category</h1>
        <ContainerCategory />
      </section>
      <section className='bg-white w-[95%] mx-auto flex relative'>
        <div className='w-40 h-40 rounded-full bg-red-600 absolute grid place-content-center top-[10%] right-1/2 translate-x-1/2 z-50 rotate-[25deg]'>
          <p className='text-white text-3xl font-semibold'>Best<br />Price</p>
        </div>
        <div className='w-3/5 clip-figure h-[600px]' />
        <div className='w-2/5'>
          <div className='grid place-content-center h-full'>
            <h3 className='text-3xl font-semibold'>Save up to</h3>
            <h1 className='text-[90px] font-bold'>$150</h1>
            <p className='text-3xl font-semibold mb-2'>on selected laptop<br />& tablets brands</p>
            <span className='text-lg font-light'>Terms and conditions apply</span>
            <div className='mt-10'>
              <Button path='shop/computers' w='w-40'>Shop</Button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white w-[95%] mx-auto my-10'>
        <h1 className='text-3xl text-center py-14'>On Sale</h1>
        <ContainerSales />
        <div className='grid place-content-center py-14'>
          <Button path='shop/sale' w='w-64'>View All</Button>
        </div>
      </section>
      <section className='bg-white w-[95%] mx-auto flex flex-row-reverse'>
        <div className='w-3/5 clip-figure-2 h-[600px]' />
        <div className='w-2/5'>
          <div className='grid place-content-center h-full'>
            <p className='px-3 bg-red-600 text-white text-xl w-2/4 mb-4'>Today's Special</p>
            <h3 className='text-3xl font-semibold'>Best Arial View in Town
            </h3>
            <h1 className='text-[90px] font-bold'>
              <span className='text-purple-2'>30%   </span>
              OFF
            </h1>
            <p className='text-3xl font-semibold mb-4'>on professional camera drones</p>
            <span className='text-lg font-light'>Limited quantities.
              <br />
              See product detail pages for availability.
            </span>
            <div className='mt-10'>
              <Button path='shop/dronesCameras' w='w-44'>Shop</Button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white w-[95%] mx-auto my-10 py-14'>
        <h1 className='text-3xl text-center pb-14'>Brands</h1>
        <div className='flex justify-center'>
          <Brand brandImg={zodiac} />
          <Brand brandImg={zoro} />
          <Brand brandImg={pjk} />
          <Brand brandImg={gxl} />
          <Brand brandImg={horizon} />
        </div>
      </section>
      <Subscribe marginTop='mt-10' marginBottom='mb-20' />
    </motion.main>
  )
}

export default Home
