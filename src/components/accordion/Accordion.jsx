import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

const Accordion = ({ children, title }) => {
  const [wrap, setWrap] = useState(false)

  return (
    <div
      className='border-b border-mycolor border-solid py-6 px-2'
      onClick={() => setWrap(!wrap)}
    >
      <div className='flex items-center justify-between'>
        <h4>{title}</h4>
        {
          wrap
            ? <IoMdArrowDropup />
            : <IoMdArrowDropdown />
        }
      </div>
      {
        wrap
          ? (
            <div id='accordion' className='pt-4'>
              {children}
            </div>)
          : ''
      }
    </div>
  )
}

export default Accordion
