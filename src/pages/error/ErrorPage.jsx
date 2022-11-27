import { motion } from 'framer-motion'
import neeson from '../../assets/errorPage-LiamNeeson.webp'

const ErrorPage = ({ error, type }) => {
  return (
    <motion.div
      className='w-full h-[600px] bg-purple-cmm text-white text-center py-5 mt-[164.5px]'
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='w-full flex flex-col justify-center items-center gap-3 text-center'>
        <div className='flex items-center gap-3'>
          {
            type === '404'
              ? <span className='text-[200px] font-bold'>4</span>
              : ''
          }
          <img
            src={neeson}
            className='w-64 h-64 object-cover rounded-full'
          />
          {
            type === '404'
              ? <span className='text-[200px] font-bold'>4</span>
              : ''
          }
        </div>
        <p className='font-light text-lg'>I don't know who you are... I don't know what you want...</p>
        <h1 className='font-bold text-7xl'>BUT I WILL LOOK FOR<br />
          <span className='relative before:content-[""] before:w-12 before:h-1 before:bg-green-600 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2'>
            YOU.
          </span>
        </h1>
      </div>
      <p className='mt-5 text-sm text-black'>{error}</p>
    </motion.div>
  )
}

export default ErrorPage
