
const WrapInput = ({ children, forInput, title, extraClass = 'w-96' }) => {
  return (
    <div className={`flex flex-col gap-4 ${extraClass} flex-grow`}>
      <label htmlFor={forInput} className='text-lg'>{title}</label>
      {children}
    </div>
  )
}

export default WrapInput
