import NavBar from './components/Navbar/NavBar'
import NavUser from './components/Navbar/NavUser'
import NavElements from './components/Navbar/NavElements'
import Footer from './components/footer/Footer'
import Messages from './components/messages/Messages'
import AdHelp from './components/help/AdHelp'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchThunk } from './store/asyncMiddleware'
import { selectStatus } from './store/selectStatus'
import Spin from './components/spinner/Spin'
import ErrorPage from './pages/error/ErrorPage'
import AnimatedRoutes from './components/routes/AnimatedRoutes'

const App = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(fetchThunk())
  }, [])

  if (status.loading === 'pending') {
    return <Spin />
  }
  if (status.loading === 'rejected') {
    return <ErrorPage error={status.error} />
  }
  if (status.loading === 'success') {
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
