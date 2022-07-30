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

const App = () => {
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
          <Route path='shopAll' element={<ProductsFilter />} />
          <Route path='computers' element={<h1>computers</h1>} />
          <Route path='tablets' element={<h1>tablets</h1>} />
          <Route path='dronesCameras' element={<h1>dronescameras</h1>} />
          <Route path='audio/*' element={<Audio />}>
            <Route path='headphones' element={<h1>Headphones</h1>} />
            <Route path='speakers' element={<h1>Speakers</h1>} />
          </Route>
          <Route path='mobile' element={<h1>mobile</h1>} />
          <Route path='tvCinema' element={<h1>tvcinema</h1>} />
          <Route path='wearableTech' element={<h1>wearabletech</h1>} />
          <Route path='sale' element={<h1>sale</h1>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <AdHelp />
      <Messages />
      <Footer />
    </>
  )
}
export default App
