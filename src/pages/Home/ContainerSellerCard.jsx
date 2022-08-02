import Card from '../../components/cards/Card'
import { useSelector, useDispatch } from 'react-redux'
import selectProducts from '../../store/filterProducts'
import { useEffect } from 'react'

const ContainerSellerCard = () => {
  const bestSellers = useSelector(selectProducts)
  const distpatch = useDispatch()
  useEffect(() => {
    distpatch({ type: 'filter/set', payload: 'best sellers min' })
  }, [])

  return (
    <div id='seller-container' className='grid grid-cols-6 w-[90%] mx-auto grid-rows-[320px]'>
      {
        bestSellers.map(p => {
          const { nameProduct, description, price, priceSale, isSale, imgURL, id } = p
          return (
            <Card
              key={id}
              product={imgURL}
              desc={`${nameProduct} - ${description}`}
              price={price}
              offer={isSale}
              priceOffer={priceSale}
            />
          )
        })
      }
    </div>
  )
}

export default ContainerSellerCard
