import { IoMdArrowDropright } from 'react-icons/io'
import MapCartProducts from './MapCartProducts'
import { useEffect } from 'react'

const Cart = ({ fn }) => {
  const closeModal = () => {
    const cartModal = document.querySelector('#cart-modal')
    cartModal.style.transition = 'all ease-out .5s'
    cartModal.style.transform = 'translateX(0px)'

    setTimeout(() => {
      fn()
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      const cartModal = document.querySelector('#cart-modal')
      cartModal.classList.add('translate-x-[-350px]')
    }, 500)
  }, [])

  return (
    <div className='w-full bg-opacity-black h-screen fixed top-0 left-0 z-50'>
      <div
        id='cart-modal'
        className='w-[350px] h-full bg-white absolute right-[-350px] ease-out transition-all
        duration-500 overflow-auto'
      >
        <header
          className='text-white flex items-center text-3xl  px-4 gap-24 h-[100px] bg-black font-light cursor-pointer'
          onClick={closeModal}
        >
          <IoMdArrowDropright />
          <h1 className=''>Cart</h1>
        </header>
        <div>
          <MapCartProducts />
        </div>
      </div>
    </div>
  )
}

export default Cart
