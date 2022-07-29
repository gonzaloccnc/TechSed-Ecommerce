import { useState } from 'react'
import { CgMathPlus, CgMathMinus } from 'react-icons/cg'
import ProgressBar from '../progressBar/ProgressBar'

const Aside = () => {
  const [active, setActive] = useState(false)

  return (
    <aside>
      <h4 className='border-b-2 py-6 border-b-mycolor text-2xl font-medium'>Filter by</h4>
      <div className='border-b-2 py-6 border-b-mycolor'>
        <div className='flex items-center justify-between cursor-pointer'>
          <p>Collection</p>
          <CgMathPlus />
        </div>
      </div>
      <div className='border-b-2 py-6 border-b-mycolor'>
        <div
          className='flex items-center justify-between cursor-pointer'
          onClick={() => setActive(!active)}
        >
          <p>Price</p>
          {
            !active
              ? <CgMathPlus />
              : <CgMathMinus />
          }
        </div>
        {
          active
            ? <ProgressBar />
            : ''
        }
      </div>
    </aside>
  )
}

export default Aside
