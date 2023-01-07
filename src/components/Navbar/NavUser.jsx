import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cart from '../cart/Cart'
import { useSelector } from 'react-redux'
import { selectCart } from '../../helpers/selectStatus'
import Auth from '../../pages/auth/Auth'
import jwtDecode from 'jwt-decode'
import NavOptionsUser from './NavOptionsUser'
import PortalModal from '../modals/PortalModal'

const NavUser = () => {
  const [cart, setCart] = useState(false)
  const openCart = () => setCart(!cart)
  const cartSize = useSelector(selectCart).length
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)

  const getCookie = (name) => {
    const start = document.cookie.indexOf(name + '=')
    const cookie = document.cookie.substring(start).substring(name.length + 1)
    return cookie
  }

  useEffect(() => {
    const cookie = getCookie('token')
    if (cookie) {
      const decode = jwtDecode(cookie)
      setUser(decode)
    }
  }, [login])

  return (
    <>
      <nav
        id='navbar-user'
        className='py-2 bg-white px-6 flex items-center justify-between'
      >
        <div className='flex items-center gap-12'>
          <h1 className='text-nav font-semibold tracking-wide'>
            <Link to='/'>TechSed</Link>
          </h1>
          <div className='flex flex-row-reverse items-center h-[44px]'>
            <button
              type='button'
              className='bg-purple-600 h-full px-7 rounded-r-full hover:bg-black'
            >
              <AiOutlineSearch fontSize={20} fill='#fff' />
            </button>
            <input
              type='search'
              placeholder='Search...'
              className='placeholder:text-slate-700 h-full px-5 w-72 rounded-l-full bg-gray-200 focus:outline-none focus:border focus:border-black hover:border hover:border-black hover:bg-white'
            />
          </div>
        </div>
        <div className='flex gap-8'>
          <div
            onClick={!user ? () => setLogin(!login) : null}
            id='userOption'
            className='inline-flex items-center gap-4 cursor-pointer relative'
          >
            <FaUserCircle fontSize='25' />
            {
              user
                ? <span className='hover:text-slate-700'>{user.username.charAt(0).toUpperCase() + user.username.substring(1)}</span>
                : <span className='hover:text-slate-700'>Log In</span>
            }
            {
              user ? <NavOptionsUser user={user} fn={setUser} /> : null
            }
          </div>
          <Link
            to='/favorites'
            className='underline inline-flex items-center gap-2 text-sm'
          >
            <MdOutlineFavoriteBorder fontSize='25' />
            <span className='hover:text-slate-700'>Favorites</span>
          </Link>
          <p
            className='inline-flex items-center gap-2 cursor-pointer'
            onClick={openCart}
          >
            <BsCart2 fontSize='25' />
            <span className='text-white grid place-content-center text-xs w-4 h-4 rounded-full bg-black'>
              {cartSize}
            </span>
          </p>
        </div>
        {
        cart
          ? <PortalModal><Cart fn={openCart} /></PortalModal>
          : ''
      }
      </nav>
      {
        login ? <PortalModal><Auth close={login} fn={setLogin} /></PortalModal> : null
      }
    </>
  )
}

export default NavUser
