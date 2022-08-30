
const TypeInput = ({ type = 'text', id, title, pholder = '', width = 'w-96' }) => {
  switch (type) {
    case 'select':
      return (
        <div className={`flex flex-col gap-4 ${width} flex-grow`}>
          <label htmlFor={id} className='text-lg'>{title}</label>
          <select
            defaultValue='Select the position'
            name='positionApply'
            id={id}
            className='outline-none border-b-2 border-input text-sm font-light pb-1 focus:border-black
            hover:border-black'
          >
            <option value='Select the position' disabled hidden>Select the position</option>
            <option value='store sales'>Store sales</option>
            <option value='store address'>Store address</option>
            <option value='store operations'>Store operations</option>
            <option value='factory and logistics'>Factory and logistics</option>
            <option value='ecommerce'>eCommerce</option>
          </select>
        </div>
      )
    case 'textarea':
      return (
        <div className={`flex flex-col gap-4 ${width} flex-grow`}>
          <label htmlFor={id} className='text-lg'>{title}</label>
          <textarea
            className='resize-none outline-none border-b-2 border-input text-sm font-light pb-1
            focus:border-black hover:border-black'
            name='textArea'
            maxLength='500'
            id={id}
          />
        </div>
      )
    default:
      return (
        <div className={`flex flex-col gap-4 ${width} flex-grow`}>
          <label htmlFor={id} className='text-lg'>{title}</label>
          <input
            className={`${type === 'number' ? 'border py-3 px-2' : 'border-b-2'} border-input 
            outline-none text-sm font-light pb-1 focus:border-black hover:border-black`}
            type={type}
            id={id}
            placeholder={pholder}
          />
        </div>
      )
  }
}

export default TypeInput
