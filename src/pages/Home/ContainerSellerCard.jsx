import Card from '../../components/cards/Card'
import { useSelector } from 'react-redux'

const ContainerSellerCard = () => {
  const bestSellers = useSelector(x => x).entities.products.filter(p => p.stock < 25).slice(0, 6)

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
