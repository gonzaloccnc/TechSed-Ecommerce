import { IoMdArrowDropright } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { selectCart } from '../../helpers/selectStatus'
import ProductCart from './ProductCart'
import { motion } from 'framer-motion'
const Cart = ({ fn }) => {
  const myCart = useSelector(selectCart)
  return (
    <div className='w-full bg-opacity-black h-screen fixed top-0 left-0 z-50'>
      <motion.div
        className='w-[350px] h-full bg-white absolute -right-[350px]'
        animate={{ x: -350 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
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
              : myCart.map(prd => {
                const { id, imgURL, nameProduct, isSale, description, price, priceSale, amount } = prd
                return (
                  <ProductCart
                    key={id}
                    img={imgURL}
                    name={nameProduct}
                    desc={description}
                    price={price}
                    priceSale={priceSale}
                    amount={amount}
                    isSale={isSale}
                  />
                )
              })
          }
        </div>
      </motion.div>
    </div>
  )
}

export default Cart
