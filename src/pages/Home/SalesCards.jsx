import { Link } from 'react-router-dom'
const hover1 = 'hover:bg-red-700 hover:border hover:border-white hover:text-white'
const hover2 = 'hover:bg-purple-cmm hover:border hover:border-white hover:text-white'

const SalesCards = ({ bg, des1, des2, title, separator, separator2, cHover, path }) => {
  return (
    <div
      style={{ textShadow: '0 0 2px black' }}
      className={`w-[580px] h-[468px] ${bg} bg-cover bg-center bg-no-repeat text-white flex flex-col gap-6 justify-center px-16`}
    >
      <p className='text-xl'>{des1}</p>
      <h3 className='text-5xl font-bold'>{title}<br />{separator}<br />{separator2 || ''}</h3>
      <p className='text-xl'>{des2}</p>
      <div className='h-10'>
        <Link
          style={{ textShadow: 'none' }}
          className={`text-black inline-flex transition duration-300 ease-freeze box-border py-2 px-14 bg-white rounded-full ${cHover ? hover1 : hover2}`}
          to={path}
        >Shop
        </Link>
      </div>
    </div>
  )
}

export default SalesCards
