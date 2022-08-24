import { NavLink } from 'react-router-dom'

const Filter = () => {
  return (
    <nav className='mt-3 text-sm flex flex-col gap-1'>
      <NavLink to='/shop/shopAll' className='text-slate-800 hover:text-slate-500'>All</NavLink>
      <NavLink to='/shop/sale' className='text-slate-800 hover:text-slate-500'>Sale</NavLink>
      <NavLink to='/shop/bestSellers' className='text-slate-800 hover:text-slate-500'>Best Sellers</NavLink>
      <NavLink to='/shop/computers' className='text-slate-800 hover:text-slate-500'>Computers</NavLink>
      <NavLink to='/shop/tablets' className='text-slate-800 hover:text-slate-500'>Tablets</NavLink>
      <NavLink to='/shop/dronesCameras' className='text-slate-800 hover:text-slate-500'>Drones & Cameras</NavLink>
      <NavLink to='/shop/audio/headphones' className='text-slate-800 hover:text-slate-500'>Headphones</NavLink>
      <NavLink to='/shop/audio/speakers' className='text-slate-800 hover:text-slate-500'>Speakers</NavLink>
      <NavLink to='/shop/mobile' className='text-slate-800 hover:text-slate-500'>Phones</NavLink>
      <NavLink to='/shop/tvCinema' className='text-slate-800 hover:text-slate-500'>T.V. & Home Cinema</NavLink>
      <NavLink to='/shop/wearableTech' className='text-slate-800 hover:text-slate-500'>Wearable Tech</NavLink>
    </nav>
  )
}

export default Filter
