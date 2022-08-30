import { Link } from 'react-router-dom'

const Button = ({ path, children, w, hover }) => {
  return (
    <Link
      className={`text-white bg-purple-2 ${w} grid place-content-center py-3 rounded-full 
      ${hover ? 'hover:bg-white hover:text-black' : 'hover:bg-black'}  transition duration-300 ease-freeze`}
      to={path}
    >{children}
    </Link>
  )
}

export default Button
