import { Outlet } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Aside from './Aside'
import { useState } from 'react'
import SortBy from '../../components/Sort/SortBy'

const Shop = ({ pageTitle = 'Shop All' }) => {
  const [toggleSort, setToggleSort] = useState(false)

  return (
    <main className='bg-white pb-20'>
      <h1 className='text-5xl font-semibold text-center pt-16 pb-8'>{pageTitle}</h1>
      <section id='container-products'>
        <Aside />
        <div id='products' className='flex flex-col items-end py-4'>
          <div
            className='border mb-6 border-black flex justify-around items-center py-2 w-48 cursor-pointer relative'
            onClick={() => setToggleSort(!toggleSort)}
          >
            <p>Sort by</p>
            {
              toggleSort
                ? (
                  <>
                    <IoIosArrowUp />
                    <SortBy />
                  </>
                  )
                : <IoIosArrowDown />
            }
          </div>
          <Outlet />
        </div>
      </section>
    </main>
  )
}

export default Shop
