import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='w-full h-[80vh] bg-slate-900'>
      <div>
        <p>Best Prices</p>
        <h2>Incredible Prices  on All  Your Favorites Items</h2>
        <p>Ger more for  less on selected brands</p>
        <Link to='/shop/shopAll'>Shop Now</Link>
      </div>
    </section>
  )
}

export default Home
