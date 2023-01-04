import './loading.css'

const Loading = () => {
  return (
    <div className='w-full h-screen absolute top-0 left-0 bg-opacity-black z-[200]'>
      <div className='sk-chase'>
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
        <div className='sk-chase-dot' />
      </div>
    </div>
  )
}

export default Loading
