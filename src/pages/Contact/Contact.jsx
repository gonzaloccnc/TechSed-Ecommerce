import TypeInput from '../../components/inputs/TypeInput'
import Subscribe from '../../components/Subscribe/Subscribe'

const Contact = () => {
  return (
    <main className='py-14 bg-white'>
      <h1 className='text-center text-5xl font-semibold pb-28'>Contact Us</h1>
      <div id='contact' className='flex py-16 border-t-2 gap-10 items-center border-solid border-mycolor w-4/5 h-[700px] mx-auto'>
        <div className='w-1/2 h-full'>
          <div className='flex flex-col gap-2 mb-20 font-light'>
            <h3 className='font-semibold text-xl pb-10'>Working Hours</h3>
            <p>Mon - Fri: 7:00 - 22:00</p>
            <p>Saturday: 8:00 - 22:00</p>
            <p>Sunday: 8:00 - 23:00</p>
          </div>
          <div className='flex flex-col gap-2 font-light'>
            <h3 className='font-semibold text-xl pb-10'>Store Location</h3>
            <p>Av. Fray A. Alcande 10,</p>
            <p>44100 Guad., Jal., Mexico</p>
            <p>info@mysite.com</p>
            <p>+52-1-33-12345678</p>
          </div>
        </div>
        <div className='w-1/2 h-full'>
          <h1 className='font-semibold text-xl pb-10'>We are here to help!</h1>
          <p className='font-light pb-10'>
            Complete the form with any questions you have in mind and we will answer you as soon as possible
          </p>
          <form action='POST' className='flex w-full mx-auto flex-wrap gap-9 items-end justify-between'>
            <TypeInput type='text' id='name' title='Name' width='50%' />
            <TypeInput type='text' id='surname' title='Surname' width='50%' />
            <TypeInput type='text' id='email' title='Email *' width='50%' />
            <TypeInput type='text' id='affair' title='Affair' width='50%' />
            <TypeInput type='textarea' id='messageSend' title='Message' />
            <button className='w-1/2 h-12 text-white bg-purple-2  grid place-content-center py-3 rounded-full hover:bg-black transition duration-300 ease-freeze'>Send</button>
          </form>
        </div>
      </div>
      <Subscribe marginTop='mt-10' />
    </main>
  )
}

export default Contact
