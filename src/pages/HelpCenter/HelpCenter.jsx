import { AiOutlineSearch } from 'react-icons/ai'
import Accordion from '../../components/accordion/Accordion'

const HelpCenter = () => {
  return (
    <main className='py-14 bg-white'>
      <h1 className='text-center text-5xl font-semibold pb-28'>TechSed Support</h1>
      <div className='w-4/5 mx-auto'>
        <div className='w-full flex justify-around items-center mb-4'>
          <h2 className='w-1/2 text-right font-semibold text-3xl'>Frequently asked questions</h2>
          <AiOutlineSearch fontSize={20} />
        </div>
        <div className='w-full'>
          <nav className='font-light w-full px-2'>
            <a href='ga' className='mr-4'>Configuring FAQs</a>
            <a href='ga'>General</a>
          </nav>
          <div>
            <Accordion title='How do I add a new question and answer?'>
              <p>Hi I'm wrap</p>
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HelpCenter
