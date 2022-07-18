
const BusinessFeatures = ({ top, bottom, children }) => {
  return (
    <div className='font-semibold w-1/4 h-full flex justify-center items-center text-xl gap-5'>
      {children}
      <h3>{top}<br />{bottom}</h3>
    </div>
  )
}

export default BusinessFeatures
