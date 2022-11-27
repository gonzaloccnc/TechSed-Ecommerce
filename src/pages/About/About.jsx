import TypeInput from '../../components/inputs/TypeInput'
import { motion } from 'framer-motion'
import about from '../../assets/about/about.webp'

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
        <form action='POST' className='flex w-[804px] mx-auto flex-wrap gap-9 items-end justify-between'>
          <TypeInput type='text' id='name' title='Name' />
          <TypeInput type='text' id='surname' title='Surname' />
          <TypeInput type='text' id='email' title='Email *' />
          <TypeInput type='text' id='phone' title='Phone' />
          <TypeInput type='select' id='positionApply' title='Position you are applying for' />
          <TypeInput type='date' id='date' title='Start date available' />
          <TypeInput type='text' id='cv' title='Link to your CV' pholder='Type you URL' width='w-[70%]' />
          <button className='w-1/5 h-12 text-white bg-purple-2  grid place-content-center py-3 rounded-full hover:bg-black transition duration-300 ease-freeze'>Send</button>
        </form>
      </div>
    </motion.main>
  )
}

export default About
