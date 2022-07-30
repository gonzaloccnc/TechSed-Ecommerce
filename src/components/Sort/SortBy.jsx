import { NavLink } from 'react-router-dom'
// add funcionality  in filters by the options
const SortBy = () => {
  return (
    <div className='z-50 absolute bg-white -top-full -translate-y-[90%] border border-solid border-mycolor shadow-xl py-2 w-full flex flex-col'>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>Order by</NavLink>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>The most new</NavLink>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>Price(Low to High)</NavLink>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>Price(High to Low)</NavLink>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>Name A-Z</NavLink>
      <NavLink to='/shop/shopAll' className='py-2 hover:bg-mycolor px-5'>Name Z-A</NavLink>
    </div>
  )
}

export default SortBy
