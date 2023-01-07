import { FcGoogle } from 'react-icons/fc'
import ButtonSubmit from '../../components/button/ButtonSubmit'
import { useRef } from 'react'

const SubAuth = ({ children, title, titlebtn, have, titleHave, openPage, open, handleClick }) => {
  const wrapAuth = useRef(null)

  const handleChange = () => {
    wrapAuth.current.classList.add('opacity-0')
    setTimeout(function () {
      wrapAuth.current.classList.remove('opacity-0')
      openPage(!open)
    }, 200)
  }

  return (
    <div className='w-1/2 h-full pt-8 transition-all duration-75 ease-freeze' ref={wrapAuth}>
      <h1 className='text-center text-5xl font-bold mb-14'>{title}</h1>
      <div className='w-4/5 mx-auto flex flex-wrap gap-x-8 gap-y-10'>
        {children}
      </div>
      <div className='mt-8 w-full'>
        <ButtonSubmit
          handleClick={handleClick}
          extraClass='w-1/2 mx-auto mb-5'
        >{titlebtn}
        </ButtonSubmit>
        <ButtonSubmit
          extraClass='w-1/2 mx-auto'
        >{titlebtn} with Google <FcGoogle fontSize='25' />
        </ButtonSubmit>
        <p className='text-center mt-5'>{have} have an account?
          <span
            className='cursor-pointer underline decoration-purple-cmm'
            onClick={handleChange}
          > {titleHave}
          </span>
        </p>
      </div>
    </div>
  )
}

export default SubAuth
