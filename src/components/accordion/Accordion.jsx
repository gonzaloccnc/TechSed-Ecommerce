import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosLink } from 'react-icons/io'
import { FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Accordion = ({ children, title }) => {
  const [wrap, setWrap] = useState(false)
  const location = window.location.href

  return (
    <div
      className='border-b border-mycolor border-solid py-6 px-2'
    >
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={() => setWrap(!wrap)}
      >
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
              <div className='flex gap-3 items-center mt-5'>
                <a href='https://www.facebook.com'>
                  <FaFacebookF fontSize='13' />
                </a>
                <a href='https://www.twitter.com'>
                  <FaTwitter fontSize='15' />
                </a>
                <a href='https://www.linkedin.com'>
                  <FaLinkedin fontSize='15' />
                </a>
                <div className='relative' id='copy'>
                  <CopyToClipboard text={location}>
                    <IoIosLink fontSize='15' />
                  </CopyToClipboard>
                  <p className='absolute py-1 -top-full -translate-y-full -translate-x-[45%] w-40 bg-slate-800 text-white text-sm text-center before:content-[""] before:w-4 before:h-4 before:bg-slate-800 before:absolute before:-z-10 before:-bottom-1/4 before:right-1/2 before:translate-x-1/2 before:rotate-45'>
                    Copy the question link
                  </p>
                </div>
              </div>
            </div>)
          : ''
      }
    </div>
  )
}

export default Accordion
