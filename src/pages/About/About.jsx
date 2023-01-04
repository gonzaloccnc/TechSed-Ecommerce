import { motion } from 'framer-motion'
import about from '../../assets/about/about.webp'
import ButtonSubmit from '../../components/button/ButtonSubmit'
import WrapInput from '../../components/inputs/WrapInput'

const About = () => {
  return (
    <motion.main
      className='bg-white py-16 mt-[164.5px]'
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='text-center text-5xl font-semibold pb-28'>About TechSed</h1>
      <div id='about-des' className='flex py-16 border-y-2 gap-10 items-center border-solid border-mycolor w-4/5 h-[700px] mx-auto'>
        <img src={about} className='w-3/6 h-full' />
        <p className='w-2/5 text-lg font-light'>
          Paragraph. Click to edit and add your own text. It is easy. Click "Edit Text" or double click
          here to add your content and change the font. You can drag and drop this text wherever you want
          on your page. In this space you can tell your story and allow users to know more about you.
          <br /><br />
          This is a great space to write a long text about your company and services. You can use this space
          to go into more detail about your company. Talk about your team and the services you offer.
          Tell visitors the story of how you came up with the idea for your business and what sets you apart
          from your competitors. Make your company stand out and show visitors who you are.
        </p>
      </div>
      <div className='pb-20'>
        <h3 className='text-3xl text-center mb-4 pt-16 font-semibold'>Jobs</h3>
        <p className='text-lg font-light text-center pb-16'>
          See the job offers and opportunities that await you
        </p>
        <form className='flex w-[804px] mx-auto flex-wrap gap-9 items-end justify-between'>
          <WrapInput forInput='name' title='Name'>
            <input
              className='border-b-2 border-input
              outline-none text-sm font-light pb-1 focus:border-black hover:border-black
              bg-transparent'
              type='text'
              id='name'
            />
          </WrapInput>
          <WrapInput forInput='surname' title='Surname'>
            <input
              className='border-b-2 border-input
              outline-none text-sm font-light pb-1 focus:border-black hover:border-black
              bg-transparent'
              type='text'
              id='surname'
            />
          </WrapInput>
          <WrapInput forInput='email' title='Email *'>
            <input
              className='border-b-2 border-input
              outline-none text-sm font-light pb-1 focus:border-black hover:border-black
              bg-transparent'
              type='email'
              id='email'
            />
          </WrapInput>
          <WrapInput forInput='phone' title='Phone'>
            <input
              className='border-b-2 border-input
              outline-none text-sm font-light pb-1 focus:border-black hover:border-black
              bg-transparent'
              type='number'
              maxLength='9'
              id='phone'
            />
          </WrapInput>
          <WrapInput forInput='possitionApply' title='Position you are applying for'>
            <select
              defaultValue='Select the position'
              name='positionApply'
              id='possitionApply'
              className='outline-none border-b-2 border-input text-sm font-light pb-1
              focus:border-black hover:border-black'
            >
              <option value='Select the position' disabled hidden>Select the position</option>
              <option value='store sales'>Store sales</option>
              <option value='store address'>Store address</option>
              <option value='store operations'>Store operations</option>
              <option value='factory and logistics'>Factory and logistics</option>
              <option value='ecommerce'>eCommerce</option>
            </select>
          </WrapInput>
          <WrapInput forInput='date' title='Start date available'>
            <input
              className='border-b-2 border-input outline-none text-sm font-light pb-1
            focus:border-black hover:border-black bg-transparent'
              type='date'
              id='date'
            />
          </WrapInput>
          <WrapInput forInput='cv' title='Link to your CV' extraClass='w-[70%]'>
            <input
              className='border-b-2 border-input
              outline-none text-sm font-light pb-1 focus:border-black hover:border-black
              bg-transparent'
              type='url'
              placeholder='Type your URL'
              id='cv'
            />
          </WrapInput>
          <ButtonSubmit extraClass='w-1/5'>Send</ButtonSubmit>
        </form>
      </div>
    </motion.main>
  )
}

export default About
