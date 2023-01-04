import Subscribe from '../../components/Subscribe/Subscribe'
import { motion } from 'framer-motion'
import ButtonSubmit from '../../components/button/ButtonSubmit'
import WrapInput from '../../components/inputs/WrapInput'

const Contact = () => {
  return (
    <motion.main
      className='py-14 bg-white mt-[164.5px]'
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          <form className='flex w-full mx-auto flex-wrap gap-9 items-end justify-between'>
            <WrapInput forInput='name' title='Name' extraClass='50%'>
              <input
                className='border-b-2 border-input
                outline-none text-sm font-light pb-1 focus:border-black hover:border-black
                bg-transparent'
                type='text'
                id='name'
              />
            </WrapInput>
            <WrapInput forInput='surname' title='Surname' extraClass='50%'>
              <input
                className='border-b-2 border-input
                outline-none text-sm font-light pb-1 focus:border-black hover:border-black
                bg-transparent'
                type='text'
                id='surname'
              />
            </WrapInput>
            <WrapInput forInput='email' title='Email *' extraClass='50%'>
              <input
                className='border-b-2 border-input
                outline-none text-sm font-light pb-1 focus:border-black hover:border-black
                bg-transparent'
                type='email'
                id='email'
              />
            </WrapInput>
            <WrapInput forInput='affair' title='Affair' extraClass='50%'>
              <input
                className='border-b-2 border-input
                outline-none text-sm font-light pb-1 focus:border-black hover:border-black
                bg-transparent'
                type='text'
                id='affair'
              />
            </WrapInput>
            <WrapInput forInput='messageSend' title='Message'>
              <textarea
                className='resize-none outline-none border-b-2 border-input text-sm font-light pb-1
              focus:border-black hover:border-black'
                name='textArea'
                maxLength='500'
                id='messageSend'
              />
            </WrapInput>
            <ButtonSubmit>Send</ButtonSubmit>
          </form>
        </div>
      </div>
      <Subscribe marginTop='mt-10' />
    </motion.main>
  )
}

export default Contact
