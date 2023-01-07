const ProductCart = ({ id, img, name, desc, price, priceSale, amount, isSale }) => {
  return (
    <div className='w-full flex justify-between border-b border-solid border-input'>
      <div className='w-20 auto flex-shrink-0'>
        <img src={img} />
      </div>
      <div
        className='w-[230px] text-xs grid justify-start self-center gap-1'
      >
        <h4>{name} {desc}</h4>
        <p className='text-purple-cmm'>${priceSale || price}</p>
        <p className='text-red-800'>Amount: {amount}</p>
        <p className='text-purple-cmm'>
          Total: ${isSale ? (priceSale * amount).toFixed(2) : (price * amount).toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default ProductCart
