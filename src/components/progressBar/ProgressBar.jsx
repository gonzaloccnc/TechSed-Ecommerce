import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const priceGap = 800

const ProgressBar = () => {
  const { high, low } = useSelector(x => x.filter)
  const [minor, setMinor] = useState(low || 2500)
  const [major, setMajor] = useState(high || 7500)
  const dispatch = useDispatch()

  useEffect(() => {
    const min = document.querySelector('.range-input .range-min')
    const max = document.querySelector('.range-input .range-m')
    const progress = document.querySelector('.slider .progress')

    progress.style.left = (min.value / min.max) * 100 + '%'
    progress.style.right = 100 - (max.value / max.max) * 100 + '%'
  }, [])

  const ajustMinor = (e) => {
    const progress = document.querySelector('.slider .progress')
    const valueInput = Number(e.target.value)

    if (major - minor === priceGap) {
      if (major - valueInput >= priceGap) {
        setMinor(valueInput)
      }
    } else if (major - valueInput >= priceGap) {
      progress.style.left = (valueInput / e.target.max) * 100 + '%'
      setMinor(valueInput)
    }

    dispatch({ type: 'filter/set', payload: { high: major, low: minor } })
  }

  const ajustMajor = (e) => {
    const valueInput = Number(e.target.value)
    const progress = document.querySelector('.slider .progress')

    if (major - minor === priceGap) {
      if (valueInput - minor >= priceGap) {
        setMajor(valueInput)
      }
    } else if (valueInput - minor >= priceGap) {
      progress.style.right = 100 - (valueInput / e.target.max) * 100 + '%'
      setMajor(valueInput)
    }

    dispatch({ type: 'filter/set', payload: { high: major, low: minor } })
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
          onChange={ajustMinor}
        />
        <input
          type='range'
          className='range-m'
          min='0'
          max='10000'
          value={major}
          step='100'
          onChange={ajustMajor}
        />
      </div>
      <div className='flex justify-between text-sm'>
        <span>${minor}</span>
        <span>${major}</span>
      </div>
    </div>
  )
}

export default ProgressBar
