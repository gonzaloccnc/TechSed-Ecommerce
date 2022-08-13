import React from 'react'

const Subscribe = ({ marginTop, marginBottom }) => {
  return (
    <section className={`bg-purple-2 w-[95%] mx-auto ${marginTop} ${marginBottom} pt-8 pb-16 text-white`}>
      <div className='w-3/5 mx-auto'>
        <h1 className='text-center text-3xl font-semibold'>Newsletter</h1>
        <p className='text-center text-lg font-light my-2'>Sign up to receive updates on new arrivals and special offers</p>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor='email' className='pl-7'>Email *</label>
          <div className='relative w-full'>
            <input
              className='rounded-full px-7 text-black w-full h-12 focus:outline-none focus:border focus:border-black'
              type='email' name='email' id='email'
              placeholder='Your Email Here'
            />
            <button className='rounded-full h-12 w-56 -translate-x-56 absolute px-3 bg-black hover:bg-purple-300 hover:text-black'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
