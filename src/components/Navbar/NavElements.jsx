import { NavLink } from 'react-router-dom'

const NavElements = () => {
  return (
    <nav className='bg-mycolor px-7 text-sm' id='nav-bar-elements'>
      <ul className='flex gap-7'>
        <li>
          <NavLink
            to='/shop/shopAll' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Shop All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/computers' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Computers
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/tablets' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Tablets
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/dronesCameras' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Drones & Cameras
          </NavLink>
        </li>
        <li className='deploy-nav relative'>
          <p
            to='/shop/audio' className='cursor-pointer h-10 inline-flex items-center'
          >Audio
          </p>
          <div className='py-1'>
            <ul className='bg-gray-100'>
              <li className='px-3 py-1'>
                <NavLink
                  className='hover:text-purple-2' to='/shop/audio/headphones'
                >Headphones
                </NavLink>
              </li>
              <li className='px-3 py-1'>
                <NavLink
                  className='hover:text-purple-2' to='/shop/audio/speakers'
                >Speakers
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <NavLink
            to='/shop/mobile'
            className='hover:text-purple-2 h-10 inline-flex items-center'
          >Mobile
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/tvCinema' className='hover:text-purple-2 h-10 inline-flex items-center'
          >T.V & Home Cinema
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/wearableTech' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Wearable Tech
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/shop/sale' className='hover:text-purple-2 h-10 inline-flex items-center'
          >Sale
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavElements
