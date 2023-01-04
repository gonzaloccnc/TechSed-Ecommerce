import { Link } from 'react-router-dom'

const NavOptionsUser = ({ user, fn }) => {
  const deleteCookie = (name) => {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    fn(null)
  }

  return (
    <div
      className='absolute top-6 pt-5'
      id='myOptions'
    >
      <div className='w-full bg-black text-white rounded-lg'>
        <nav className='flex flex-col p-2 gap-2'>
          <Link to='profile' className='hover:text-error'>Profile</Link>
          <Link to='myshop' className='hover:text-error'>My Shopping</Link>
          <Link
            to='profile'
            className='hover:text-error'
            onClick={(e) => { e.preventDefault(); deleteCookie('token') }}
          >Log out
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default NavOptionsUser
