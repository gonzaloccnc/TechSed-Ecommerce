import { useState, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import SubAuth from './SubAuth'
import WrapInput from '../../components/inputs/WrapInput'
import Loading from '../../components/loading/Loading'

const Auth = ({ close, fn }) => {
  const closeModal = () => fn(!close)
  const [openLogin, setOpenLogin] = useState(true)
  const [isLogin, setisLogin] = useState(false)
  const [load, setLoading] = useState(false)
  // no cierra fix
  const signUp = async (e) => {
    setLoading(true)
    e.preventDefault()
    const email = document.querySelector('#email-u').value
    const username = document.querySelector('#user').value
    const password = document.querySelector('#password').value

    try {
      const req = await fetch(import.meta.env.VITE_API + '/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, username, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!req.ok) throw new Error('ocurrio un error')

      const res = await req.json()
      const week = 7 * 24 * 60 * 60 * 1000
      const limit = new Date(Date.now() + week).toUTCString()
      document.cookie = `token=${res.token}; expires=${limit}`
      setisLogin(true)
    } catch (ex) {
    } finally {
      setLoading(false)
    }
  }

  const login = async (e) => {
    e.preventDefault()
    setLoading(true)
    const email = document.querySelector('#email-u').value
    const password = document.querySelector('#password').value
    try {
      const req = await fetch(import.meta.env.VITE_API + `/api/users/auth?email=${email}&password=${password}`, {
        method: 'POST'
      })

      if (!req.ok) throw new Error(req)

      const res = await req.json()
      const week = 7 * 24 * 60 * 60 * 1000
      const limit = new Date(Date.now() + week).toUTCString()
      document.cookie = `token=${res.token}; expires=${limit}`
      setisLogin(true)
    } catch (ex) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLogin) fn(!close)
  }, [isLogin])

  return (
    <>
      <section className='w-full h-screen flex bg-white absolute top-0 left-0 z-50'>
        <AiFillCloseCircle
          onClick={closeModal}
          className='absolute right-5'
          fontSize='40'
          fill='#ff0000'
        />
        <div className='w-1/2 h-full bg-login bg-cover bg-no-repeat pt-8'>
          <h1 className='text-red-800 text-3xl w-3/5 mx-auto font-semibold'>Join us and get promotions on your products!</h1>
        </div>
        {
          openLogin
            ? (
              <SubAuth
                title='Login Account'
                titlebtn='Login'
                have='You do not'
                titleHave='Sign in'
                openPage={setOpenLogin}
                open={openLogin}
                handleClick={login}
              >
                <WrapInput forInput='email-u' title='Email' extraClass='w-2/5'>
                  <input
                    className='border-b-2 border-input outline-none text-sm font-light pb-1
                  focus:border-black hover:border-black bg-transparent'
                    type='email'
                    defaultValue=''
                    id='email-u'
                  />
                </WrapInput>
                <WrapInput forInput='password' title='Password'>
                  <input
                    className='border-b-2 border-input outline-none text-sm font-light pb-1
                  focus:border-black hover:border-black bg-transparent'
                    type='password'
                    defaultValue=''
                    id='password'
                  />
                </WrapInput>
              </SubAuth>
              )
            : (
              <SubAuth
                title='Create Account'
                titlebtn='Sign in'
                have='You'
                titleHave='Login'
                openPage={setOpenLogin}
                open={openLogin}
                handleClick={signUp}
              >
                <WrapInput forInput='email-u' title='Email' extraClass='w-2/5'>
                  <input
                    className='border-b-2 border-input outline-none text-sm font-light pb-1
                  focus:border-black hover:border-black bg-transparent'
                    type='email'
                    id='email-u'
                  />
                </WrapInput>
                <WrapInput forInput='user' title='User' extraClass='w-2/5'>
                  <input
                    className='border-b-2 border-input outline-none text-sm font-light pb-1
                  focus:border-black hover:border-black bg-transparent'
                    type='text'
                    id='user'
                  />
                </WrapInput>
                <WrapInput forInput='password' title='Password'>
                  <input
                    className='border-b-2 border-input outline-none text-sm font-light pb-1
                  focus:border-black hover:border-black bg-transparent'
                    type='password'
                    id='password'
                  />
                </WrapInput>
              </SubAuth>
              )
        }
      </section>
      {
        load ? <Loading /> : null
      }
    </>
  )
}

export default Auth
