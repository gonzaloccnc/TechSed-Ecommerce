import { useDispatch } from 'react-redux'

const SortBy = () => {
  const dispatch = useDispatch()

  const filterBy = filterby => {
    dispatch({ type: 'filter/set', payload: { sort: filterby } })
  }

  return (
    <div className='z-[100] absolute bg-white -top-full -translate-y-[90%] border border-solid border-mycolor shadow-xl py-2 w-full flex flex-col'>
      <a className='py-2 hover:bg-mycolor px-5'>Order by</a>
      <a className='py-2 hover:bg-mycolor px-5' onClick={() => filterBy('Most new')}>The most new</a>
      <a className='py-2 hover:bg-mycolor px-5' onClick={() => filterBy('Low to high')}>Price(Low to High)</a>
      <a className='py-2 hover:bg-mycolor px-5' onClick={() => filterBy('High to low')}>Price(High to Low)</a>
      <a className='py-2 hover:bg-mycolor px-5' onClick={() => filterBy('A-Z')}>Name A-Z</a>
      <a className='py-2 hover:bg-mycolor px-5' onClick={() => filterBy('Z-A')}>Name Z-A</a>
    </div>
  )
}

export default SortBy
