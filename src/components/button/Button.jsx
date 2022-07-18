import { Link } from 'react-router-dom'

const Button = ({ path, children, w }) => {
  return (
    <Link
      className={`text-white bg-purple-2 ${w} grid place-content-center py-3 rounded-full hover:bg-black transition duration-300 ease-freeze`}
      to={path}
    >{children}
    </Link>
  )
}

export default Button
