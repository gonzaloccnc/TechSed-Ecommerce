import { Link } from 'react-router-dom'

const SalesCards = ({ bg, des1, des2, title }) => {
  return (
    <div className={`w-[580px] h-[468px] bg-${bg} bg-cover bg-center bg-no-repeat my-10`}>
      <p>{des1}</p>
      <h3>{title}</h3>
      <p>{des2}</p>
      <Link to='/shop/sale'>Shop</Link>
    </div>
  )
}

export default SalesCards
