import NavBar from './components/Navbar/NavBar'
import NavUser from './components/Navbar/NavUser'
import NavElements from './components/Navbar/NavElements'
import Footer from './components/footer/Footer'
import Messages from './components/messages/Messages'
import AdHelp from './components/help/AdHelp'
import Spin from './components/spinner/Spin'
import ErrorPage from './pages/error/ErrorPage'
import AnimatedRoutes from './components/routes/AnimatedRoutes'
import { useSelector } from 'react-redux'
import { selectError, selectStatus } from './helpers/selectStatus'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (status === 'loading') {
    return <Spin />
  }
  if (status === 'failed') {
    return <ErrorPage error={error} />
  }
  if (status === 'succeeded') {
    return (
      <>
        <header className='fixed w-full z-[100] top-0 left-0'>
          <NavBar />
          <NavUser />
          <NavElements />
        </header>
        <AnimatedRoutes />
        <AdHelp />
        <Messages />
        <Footer />
      </>
    )
  }
}
export default App
