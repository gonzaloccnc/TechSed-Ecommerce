import { Link, useParams } from 'react-router-dom'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { TbMinusVertical } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectProduct } from '../../helpers/selectStatus'
import { AiOutlineHeart } from 'react-icons/ai'
import TypeInput from '../inputs/TypeInput'
import Accordion from '../accordion/Accordion'
import Card from '../cards/Card'
import { useRef, useState } from 'react'
import ProductImage from '../modals/ProductImage'

const Products = () => {
  const { id } = useParams()
  const myProduct = useSelector(selectProduct).find(p => p.id === id)
  const [openIMG, setOpenIMG] = useState(false)

  const openModalImg = () => {
    setOpenIMG(!openIMG)
  }

  const {
    description, imgURL, isSale,
    nameProduct, price, priceSale, stock
  } = myProduct
  const myref = useRef()
  const dispatch = useDispatch()

  const relatedProducts = useSelector(x => x.entities.products).slice(0, 16)

  const addToCart = e => {
    e.preventDefault()
    const inputAmount = Number(myref.current.children[1].children[1].value)
    dispatch({ type: 'set/cart', payload: { ...myProduct, amount: inputAmount } })
  }

  return (
    <>
      <main className='w-full h-auto bg-white py-10 mt-[164.5px]'>
        <section className='w-[890px] mx-auto'>
          <div className='flex items-center justify-between mb-10'>
            <h1>Home / <span className='text-input'>{nameProduct} {description}</span></h1>
            <div className='flex items-center'>
              <MdKeyboardArrowLeft fontSize={30} />
              <span>Prev</span>
              <TbMinusVertical fontSize={30} />
              <span>Next</span>
              <MdKeyboardArrowRight fontSize={30} />
            </div>
          </div>
          <section className='w-full flex justify-between'>
            <div className='w-1/2'>
              <div
                className='w-full h-[443px] border border-solid border-input mb-10 overflow-hidden cursor-zoom-in'
                onClick={openModalImg}
              >
                <img src={imgURL} className='w-full h-auto' />
              </div>
              <p className=' text-justify font-light'>
                Product description. Ideal place to "sell" your product and capture the attention of the
                buyer. Describe your product clearly and precisely. Use unique words. Write your own
                description instead of using the manufacturer's.
              </p>
            </div>
            <div className='w-[45%]'>
              <h1 className='text-3xl font-semibold'>{nameProduct} {description}</h1>
              <p className='text-sm mt-3 mb-4'>SKU: {stock}</p>
              <div className='text-lg mb-4'>
                <span className={`${priceSale ? 'line-through' : ''}`}>${price} </span>
                {priceSale ? <span>${priceSale}</span> : ''}
              </div>
              <div className='mb-8' ref={myref}>
                <span className='text-sm'>Amount</span>
                <TypeInput type='number' width='w-16' />
              </div>
              <div className='mb-4'>
                <div className='flex items-center justify-between mb-4'>
                  <Link
                    to='/cart'
                    className='py-2 hover:opacity-70 rounded-full bg-purple-2 text-white w-4/5 flex justify-center'
                    onClick={addToCart}
                  >Add to cart
                  </Link>
                  <span className='grid place-content-center w-10 h-10 rounded-full border
                  border-solid border-purple-cmm cursor-pointer'
                  >
                    <AiOutlineHeart fontSize={30} fill='#573198' />
                  </span>
                </div>
                <Link
                  to='/purchase'
                  className='py-2 hover:opacity-70 rounded-full bg-black text-white w-full flex justify-center'
                >Make a purchase
                </Link>
              </div>
              <Accordion title='Product information' noLinks>
                <p className='font-light'>
                  Product detail. Ideal place to add more information about your product such as its size,
                  materials, instructions for use and maintenance. It is also a good space to explain how
                  special your product is and its benefits.
                </p>
              </Accordion>
              <Accordion title='Return and refund policies' noLinks>
                <p className='font-light'>
                  Return and refund policy. Ideal place to explain to your customers what to do if they are
                  not satisfied with their purchase. Having a clear refund or exchange policy is a great way
                  to build trust and ensure your customers shop with confidence.
                </p>
              </Accordion>
              <Accordion title='Shipping Information' noLinks>
                <p className='font-light'>
                  Shipping Policy. Ideal place to add more information about your shipping methods,
                  packaging and costs. Providing clear information about your shipping policy is a great way
                  to build trust and ensure your customers shop with confidence.
                </p>
              </Accordion>
            </div>
          </section>
          <div className='mt-20'>
            <h2 className='text-center text-xl font-semibold mb-8'>Related products</h2>
            <div id='slider-products' className='flex items-center justify-center gap-5'>
              <MdKeyboardArrowLeft fontSize={40} />
              <div id='content-pr' className='flex gap-5 w-[800px]'>
                <Card
                  product={imgURL}
                  desc={description}
                  price={price}
                  offer={isSale}
                  priceOffer={priceSale}
                />
                <Card
                  product={imgURL}
                  desc={description}
                  price={price}
                  offer={isSale}
                  priceOffer={priceSale}
                />
                <Card
                  product={imgURL}
                  desc={description}
                  price={price}
                  offer={isSale}
                  priceOffer={priceSale}
                />
              </div>
              <MdKeyboardArrowRight fontSize={40} />
            </div>
          </div>
        </section>
      </main>
      {
        openIMG
          ? <ProductImage fn={openModalImg} img={imgURL} />
          : ''
      }
    </>
  )
}

export default Products
