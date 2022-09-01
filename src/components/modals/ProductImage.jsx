import { useRef } from 'react'
import { GrClose } from 'react-icons/gr'
const ProductImage = ({ fn, img }) => {
  const imgPr = useRef()
  const divPr = useRef()
  return (
    <main className='fixed top-0 left-0 w-full h-screen bg-white z-[300]'>
      <GrClose
        fontSize={30}
        className='absolute top-10 right-10'
        onClick={fn}
      />
      <div
        className='cursor-zoom-out w-[620px] h-auto mx-auto'
        ref={divPr}
        onClick={() => {
          imgPr.current.classList.toggle('scale-50')
          divPr.current.classList.toggle('cursor-zoom-out')
          divPr.current.classList.toggle('cursor-zoom-in')
        }}
      >
        <img src={img} className='w-full h-auto' ref={imgPr} />
      </div>
    </main>
  )
}

export default ProductImage
