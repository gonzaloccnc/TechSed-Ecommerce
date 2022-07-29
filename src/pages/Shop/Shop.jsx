import { Outlet } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import Aside from '../../components/AsideShop/Aside'

const Shop = ({ pageTitle = 'Shop All' }) => {
  return (
    <main className='bg-white pb-20'>
      <h1 className='text-5xl font-semibold text-center pt-16 pb-8'>{pageTitle}</h1>
      <section id='container-products'>
        <Aside />
        <div id='products' className='flex flex-col items-end py-4'>
          <div className='border mb-6 border-black flex justify-around items-center py-2 w-48 cursor-pointer'>
            <p>Sort by</p>
            <IoIosArrowDown />
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default Shop
