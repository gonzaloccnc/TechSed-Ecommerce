
const ButtonSubmit = ({ children, extraClass = 'w-1/2', handleClick }) => {
  return (
    <button
      className={`h-12 text-white bg-purple-2  flex justify-center items-center gap-3
      py-3 rounded-full hover:bg-black transition duration-300 ease-freeze ${extraClass}`}
      onClick={handleClick}
    >{children}
    </button>
  )
}

export default ButtonSubmit
