import { IoIosArrowDown } from 'react-icons/io'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import Card from '../../../components/cards/Card'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Deploy = () => {
  return (
    <div className='w-full py-2'>
      <nav className='flex flex-col gap-2 text-xs'>
        <NavLink to='test'>All</NavLink>
        <NavLink to='test'>Sale</NavLink>
        <NavLink to='test'>Best Sellers</NavLink>
        <NavLink to='test'>Computers</NavLink>
        <NavLink to='test'>Tablets</NavLink>
        <NavLink to='test'>Drones & Cameras</NavLink>
        <NavLink to='test'>Headphones</NavLink>
        <NavLink to='test'>Speakers</NavLink>
        <NavLink to='test'>Mobile</NavLink>
        <NavLink to='test'>TV & Home Cinema</NavLink>
        <NavLink to='test'>Wearable Tech</NavLink>
      </nav>
    </div>
  )
}

const ShopAll = () => {
  const [active, setActive] = useState(false)
  const [activeNew, setActiveNew] = useState(false)

  return (
    <main className='bg-white pb-20'>
      <h1 className='text-5xl font-semibold text-center pt-16 pb-8'>Shop All</h1>
      <section id='container-products'>
        <aside>
          <h4 className='border-b-2 py-6 border-b-mycolor text-2xl font-light'> Filter by</h4>
          <div className='border-b-2 py-6 border-b-mycolor'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setActive(!active)}
            >
              <p>Collection</p>
              {
              active ? <CgMathMinus /> : <CgMathPlus />
              }
            </div>
            {
              active
                ? <Deploy />
                : ''
            }
          </div>
          <div className='border-b-2 py-6 border-b-mycolor'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => setActiveNew(!activeNew)}
            >
              <p>Price</p>
              {
                activeNew ? <CgMathMinus /> : <CgMathPlus />
              }
            </div>
          </div>
        </aside>
        <div id='products' className='flex flex-col items-end py-4'>
          <div className='border mb-6 border-black flex justify-around items-center py-2 w-48 cursor-pointer'>
            <p>Sort by</p>
            <IoIosArrowDown />
          </div>
          <div className='w-full grid grid-cols-4'>
            <Card
              product='..\src\assets\products\Tablets\sheer-Tablet-10.2.webp'
              desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
              price='85.00'
            />
            <Card
              product='..\src\assets\products\Tablets\Jp-Space-Tablet-10.4.webp'
              desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
              price='85.00'
              offer='70.00'
            />
            <Card
              product='..\src\assets\products\Tablets\PilatesGo-Tablet-10.5.webp'
              desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
              price='85.00'
            />
            <Card
              product='..\src\assets\products\Tablets\ove-Tablet-10.3.webp'
              desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
              price='85.00'
              offer='70.00'
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopAll
