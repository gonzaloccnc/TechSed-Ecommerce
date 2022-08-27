import { IoMdArrowDropright } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { selectCart } from '../../store/selectStatus'

const Cart = ({ fn }) => {
  const myCart = useSelector(selectCart)

  return (
    <div className='w-full bg-opacity-black flex justify-end h-screen fixed top-0 left-0 z-50'>
      <div className='w-[350px] h-full bg-white'>
        <header
          className='text-white flex items-center text-3xl  px-4 gap-24 h-[100px] bg-black font-light cursor-pointer'
          onClick={fn}
        >
          <IoMdArrowDropright />
          <h1 className=''>Cart</h1>
        </header>
        <div>
          {
        !myCart.length
          ? <p className='text-center py-8 text-lg'>The cart is empty</p>
          : ''
       }
        </div>
      </div>
    </div>
  )
}

export default Cart
