import { NavLink } from 'react-router-dom'
import { GoPackage } from 'react-icons/go'

const NavBar = () => {
  return (
    <div className='text-sm w-full flex items-center justify-between px-10 py-3 text-white bg-black'>
      <div>
        <p className='inline-flex items-center gap-4'>
          <GoPackage fontSize={20} />
          Free Shipping for orders over 50$
        </p>
      </div>
      <nav className='flex gap-10' id='nav-bar-pages'>
        <NavLink className='underline' to='/about'>About</NavLink>
        <NavLink className='underline' to='/contact'>Contact</NavLink>
        <NavLink className='underline' to='/helpcenter'>HelpCenter</NavLink>
        <a target='_blank' href='https://www.google.com' rel='noreferrer'>
          Call Us
          <span className='underline'> 123-456-7890</span>
        </a>
      </nav>
    </div>
  )
}

export default NavBar
