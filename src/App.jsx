import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import About from './pages/About/About'
import HelpCenter from './pages/HelpCenter/HelpCenter'
import Contact from './pages/Contact/Contact'
import NavUser from './components/Navbar/NavUser'
import NavElements from './components/Navbar/NavElements'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Audio from './pages/Shop/Audio/Audio'
import NotFound from './pages/error/NotFound'
import Footer from './components/footer/Footer'
import Messages from './components/messages/Messages'
import AdHelp from './components/help/AdHelp'
import ProductsFilter from './pages/Shop/ProductsFilter'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchThunk } from './store/asyncMiddleware'
import { selectStatus } from './store/selectStatus'

const App = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(fetchThunk())
  }, [])

  if (status.loading === 'pending') {
    return <p>...cargando</p>
  }
  if (status.loading === 'success') {
    return (
      <>
        <header>
          <NavBar />
          <NavUser />
          <NavElements />
        </header>
        <Routes>
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
          <Route path='*' element={<NotFound />} />
        </Routes>
        <AdHelp />
        <Messages />
        <Footer />
      </>
    )
  }
}
export default App
