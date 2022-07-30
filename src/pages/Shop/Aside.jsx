import { useState } from 'react'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import Filter from '../../components/FilterShop/Filter'
import ProgressBar from '../../components/progressBar/ProgressBar'

const Aside = () => {
  const [togglePriceRange, setTogglePriceRange] = useState(false)
  const [toggleFilter, setToggleFilter] = useState(false)

  return (
    <aside>
      <h4 className='border-b-2 py-6 border-b-mycolor text-2xl font-medium'>Filter by</h4>
      <div className='border-b-2 py-6 border-b-mycolor'>
        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={() => setToggleFilter(!toggleFilter)}
        >
          <p>Collection</p>
          {
            !toggleFilter
              ? <CgMathPlus />
              : <CgMathMinus />
          }
        </div>
        {
          toggleFilter
            ? <Filter />
            : ''
        }
      </div>
      <div className='border-b-2 py-6 border-b-mycolor'>
        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={() => setTogglePriceRange(!togglePriceRange)}
        >
          <p>Price</p>
          {
            !togglePriceRange
              ? <CgMathPlus />
              : <CgMathMinus />
          }
        </div>
        {
          togglePriceRange
            ? <ProgressBar />
            : ''
        }
      </div>
    </aside>
  )
}

export default Aside
