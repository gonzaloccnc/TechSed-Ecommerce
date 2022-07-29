import { useState } from 'react'
const priceGap = 0.75

// customize the progress css and limits the progress bar size
const ProgressBar = () => {
  const [minor, setMinor] = useState(70)
  const [major, setMajor] = useState(85)

  const ajustMinor = (e) => {
    // const progress = document.querySelector('#progress')
    const valueInput = Number(e.target.value)
    if (minor - major < priceGap) {
      setMinor(valueInput)
      // progress.style.left = (minor / 85) * 100 + '%'
    }
  }

  const ajustMajor = (e) => {
    const valueInput = Number(e.target.value)
    // const progress = document.querySelector('#progress')
    if (major - minor > priceGap) {
      setMajor(valueInput)
      // progress.style.right = (major / 85) * 100 + '%'
    }
  }

  return (
    <div className='mt-6'>
      <div id='progress-bar' className='h-1 bg-mycolor border border-solid border-mycolor w-full rounded-full mb-4 relative'>
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
      </div>
    </div>
  )
}

export default ProgressBar
