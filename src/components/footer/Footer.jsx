import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import visa from '../../assets/payMethods/Visa.webp'
import mastercard from '../../assets/payMethods/mastercard.webp'
import amex from '../../assets/payMethods/amex.webp'
import chinaUpay from '../../assets/payMethods/chinaunionpay.webp'
import jcb from '../../assets/payMethods/jcb.webp'
import dinners from '../../assets/payMethods/Diners.webp'
import discover from '../../assets/payMethods/Discover.webp'
import paypal from '../../assets/payMethods/PayPal.webp'

const Footer = () => {
  const getYear = new Date(Date.now()).getFullYear()

  return (
    <footer className='bg-white'>
      <div className='p-16 pb-0 flex justify-between mb-44'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl font-semibold mb-8'>Store Loction</h3>
          <p>500 Terry Francois Street</p>
          <p>San Francisco, CA 94158</p>
          <p>info@mysite.com</p>
          <p>123-456-7890</p>
          <div className='flex gap-3 items-center mt-5'>
            <a href='https://www.facebook.com'>
              <FaFacebookF fontSize='17' />
            </a>
            <a href='https://www.instagram.com'>
              <FaInstagram fontSize='20' />
            </a>
            <a href='https://www.twitter.com'>
              <FaTwitter fontSize='20' />
            </a>
            <a href='https://www.youtube.com'>
              <FaYoutube fontSize='20' />
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-3 lnk-products'>
          <h3 className='text-xl font-semibold mb-8'>Shop</h3>
          <NavLink to='/shop/shopAll'>Shop All</NavLink>
          <NavLink to='/shop/computers'>Computers</NavLink>
          <NavLink to='/shop/tablets'>TableTablets</NavLink>
          <NavLink to='/shop/dronesCameras'>Drones & Cameras</NavLink>
          <NavLink to='/shop/audio/headphones'>Audio</NavLink>
          <NavLink to='/shop/mobile'>Mobile</NavLink>
          <NavLink to='/shop/tvCinema'>TV & Home Cinema</NavLink>
          <NavLink to='/shop/wearableTech'>Wearable Tech</NavLink>
          <NavLink to='/shop/sale'>Sale</NavLink>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl font-semibold mb-8'>Customer Support</h3>
          <NavLink to='/Contact'>Contact Us</NavLink>
          <NavLink to='/HelpCenter'>Help Center</NavLink>
          <NavLink to='/about'>About Us</NavLink>
          <NavLink to='/about'>Careers</NavLink>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-xl font-semibold mb-8'>Policy</h3>
          <NavLink to='/shippingReturn'>Shipping & Returns</NavLink>
          <NavLink to='/terms'>Terms & Conditions</NavLink>
          <NavLink to='/payment'>Payment Methods</NavLink>
          <NavLink to='/HelpCenter'>FAQ</NavLink>
        </div>
      </div>
      <div className='w-[95%] mx-auto border-t-2 border-solid border-mycolor py-8'>
        <p className='text-center text-sm font-light'>We accept the following paying methods</p>
        <div className='flex justify-around mx-auto py-10 w-4/5'>
          <img className='w-14' src={visa} />
          <img className='w-14' src={mastercard} />
          <img className='w-14' src={amex} />
          <img className='w-14' src={chinaUpay} />
          <img className='w-14' src={jcb} />
          <img className='w-14' src={dinners} />
          <img className='w-14' src={discover} />
          <img className='w-14' src={paypal} />
        </div>
      </div>
      <div className='bg-mycolor'>
        <h3 className='text-center py-3'>
          © {getYear} by TechShed. Proudly created with <a href='www.wix.com' className='underline'>Wix.com</a>
        </h3>
      </div>
    </footer>
  )
}

export default Footer
