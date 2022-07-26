import { AiFillMessage } from 'react-icons/ai'
const Messages = () => {
  return (
    <div className='fixed right-4 bottom-4 bg-red-600 w-16 h-16 rounded-full cursor-pointer'>
      <AiFillMessage
        fill='#fff' className='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        fontSize='32'
      />
    </div>
  )
}

export default Messages
