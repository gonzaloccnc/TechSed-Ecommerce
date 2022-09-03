import { Routes, Route, useLocation } from 'react-router-dom'
import About from '../../pages/About/About'
import HelpCenter from '../../pages/HelpCenter/HelpCenter'
import Contact from '../../pages/Contact/Contact'
import Home from '../../pages/Home/Home'
import Shop from '../../pages/Shop/Shop'
import Audio from '../../pages/Shop/Audio/Audio'
import ProductsFilter from '../../pages/Shop/ProductsFilter'
import Products from '../../components/products/Products'
import ErrorPage from '../../pages/error/ErrorPage'
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/helpcenter' element={<HelpCenter />} />
        <Route path='/shop/*' element={<Shop />}>
          <Route path='shopAll' element={<ProductsFilter categoryFilter='all' />} />
          <Route path='bestSellers' element={<ProductsFilter categoryFilter='best sellers all' />} />
          <Route path='computers' element={<ProductsFilter categoryFilter='computers' />} />
          <Route path='tablets' element={<ProductsFilter categoryFilter='tablets' />} />
          <Route path='dronesCameras' element={<ProductsFilter categoryFilter='drones & cameras' />} />
          <Route path='audio/*' element={<Audio />}>
            <Route path='headphones' element={<ProductsFilter categoryFilter='headphones' />} />
            <Route path='speakers' element={<ProductsFilter categoryFilter='speakers' />} />
          </Route>
          <Route path='mobile' element={<ProductsFilter categoryFilter='phones' />} />
          <Route path='tvCinema' element={<ProductsFilter categoryFilter='TV & Home Cinema' />} />
          <Route path='wearableTech' element={<ProductsFilter categoryFilter='Wearable Tech' />} />
          <Route path='sale' element={<ProductsFilter categoryFilter='sale' />} />
        </Route>
        <Route path='/products/:id' element={<Products />} />
        <Route path='*' element={<ErrorPage error='Page not found 404' type='404' />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
