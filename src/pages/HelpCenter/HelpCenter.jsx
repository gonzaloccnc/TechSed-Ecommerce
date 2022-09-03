import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Accordion from '../../components/accordion/Accordion'
import { AnimatePresence, motion } from 'framer-motion'

const HelpCenter = () => {
  const [openTab, setOpenTab] = useState(false)

  const changeTab = e => {
    e.preventDefault()
    setOpenTab(!openTab)
  }

  return (
    <motion.main
      className='py-14 bg-white mt-[164.5px]'
      initial={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className='text-center text-5xl font-semibold pb-28'>TechSed Support</h1>
      <div className='w-4/5 mx-auto'>
        <div className='w-full flex justify-around items-center mb-4'>
          <h2 className='w-1/2 text-right font-semibold text-3xl'>Frequently asked questions</h2>
          <AiOutlineSearch fontSize={20} />
        </div>
        <div className='w-full'>
          <nav className='font-normal w-full px-2'>
            <a
              href='#faqs'
              onClick={changeTab}
              className={`mr-4 ${!openTab ? 'text-purple-2' : 'text-slate-500'}`}
            >
              Configuring FAQs
            </a>
            <a
              href='#general'
              onClick={changeTab}
              className={`${openTab ? 'text-purple-2' : 'text-slate-500'}`}
            >General
            </a>
          </nav>
          <div>
            {
              !openTab
                ? (
                  <div
                    className='w-full'
                  >
                    <Accordion title='How do I add a new question and answer?'>
                      <p className='font-light text-sm'>To add a new question, follow these steps:</p>
                      <ol className='list-decimal pl-8 py-4 font-light text-sm'>
                        <li>Click the Manage FAQ button</li>
                        <li>From your site's dashboard click 'Add' and then choose the 'Questions and Answers'
                          option
                        </li>
                        <li>Each new question must be assigned to a category</li>
                        <li>Save and publish</li>
                      </ol>
                      <p className='font-light text-sm'>You can always edit your FAQs, reorder them and select other
                        categories.
                      </p>
                    </Accordion>
                    <Accordion title='Can you insert an image, video or gif to my FAQ?'>
                      <p className='font-light text-sm'>Yes. To add media content, follow these steps:</p>
                      <ol className='list-decimal pl-8 py-4 font-light text-sm'>
                        <li>Go to the app options</li>
                        <li>Click on Manage FAQ</li>
                        <li>Create or choose the question you want to add media to</li>
                        <li>When editing your answer, click the image, video, or gif icon</li>
                        <li>Add the content from your library and save the changes.</li>
                      </ol>
                    </Accordion>
                    <Accordion title='How can you edit or remove the FAQ title?'>
                      <p className='font-light text-sm'>You can edit the title from the options tab in the app. If
                        you don't want to display the title, disable the option from 'Information to display'.
                      </p>
                    </Accordion>
                  </div>
                  )
                : (
                  <div
                    className='w-full'
                  >
                    <Accordion title='What is a FAQ section?'>
                      <p className='font-light text-sm pb-4'>A FAQ (Frequently Asked Questions) section serves to quickly
                        answer common questions about your business such as 'What are your hours?', 'Where do you
                        ship to?' or 'How can I make a reservation?' FAQs are a great way to help people navigate
                        your site and can even help you improve your site's SEO.
                      </p>
                      <img src='.\src\assets\faqsGeneral.webp' className='w-80' />
                    </Accordion>
                  </div>
                  )
            }
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default HelpCenter
