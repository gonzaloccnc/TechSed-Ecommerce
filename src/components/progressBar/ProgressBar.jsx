import { useState } from 'react'
// customize the progress css and limits
// const priceGap = 800
const ProgressBar = () => {
  const [minor, setMinor] = useState(2500)
  const [major, setMajor] = useState(7500)

  const ajustMinor = (e) => {
    const progress = document.querySelector('.slider .progress')
    const valueInput = Number(e.target.value)
    progress.style.left = (minor / e.target.max) * 100 + '%'
    setMinor(valueInput)
    // if (major - minor !== priceGap)
  }

  const ajustMajor = (e) => {
    const valueInput = Number(e.target.value)
    const progress = document.querySelector('.slider .progress')
    progress.style.right = 100 - (major / e.target.max) * 100 + '%'
    setMajor(valueInput)
  }

  return (
    <div className='mt-6'>
      <div className='slider'>
        <div className='progress' />
      </div>
      <div className='range-input'>
        <input
          type='range'
          className='range-min'
          min='0'
          max='10000'
          value={minor}
          step='100'
          onInput={ajustMinor}
        />
        <input
          type='range'
          className='range-m'
          min='0'
          max='10000'
          value={major}
          step='100'
          onInput={ajustMajor}
        />
      </div>
      <div className='flex justify-between text-sm'>
        <span>$
          {
            minor > major ? major.toLocaleString('en-US') : minor.toLocaleString('en-US')
          }
        </span>
        <span>$
          {
            major < minor ? minor.toLocaleString('en-US') : major.toLocaleString('en-US')
          }
        </span>
      </div>
      {/* <div id='progress-bar' className='h-1 bg-mycolor border border-solid border-mycolor w-full rounded-full mb-4 relative'>
        <div id='progress' className='h-1 bg-blue-700 absolute w-full' />
        <input
          type='range'
          min='70'
          max='85'
          id='minor'
          step='0.75'
          value={minor}
          className='absolute h-1 w-full appearance-none top-1 -translate-y-1 rounded-full'
          onInput={ajustMinor}
        />
        <input
          type='range'
          min='70'
          max='85'
          id='major'
          step='0.75'
          value={major}
          className='absolute h-1 w-full appearance-none top-1 -translate-y-1 rounded-full'
          onInput={ajustMajor}
        />
      </div>
      <div className='flex justify-between text-sm'>
        <span>${minor.toLocaleString('en-US')}</span>
        <span>${major.toLocaleString('en-US')}</span>
      </div> */}
    </div>
  )
}

export default ProgressBar
