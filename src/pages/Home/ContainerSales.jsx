import Card from '../../components/cards/Card'
import { useSelector } from 'react-redux'

const ContainerSales = () => {
  const productsSales = useSelector(x => x).entities.products.filter(p => p.isSale).slice(0, 6)

  return (
    <div id='sale-container' className='grid grid-cols-6 w-[90%] mx-auto grid-rows-[320px]'>
      {
        productsSales.map(p => {
          const { nameProduct, description, price, priceSale, isSale, imgURL, id } = p
          return (
            <Card
              key={id}
              id={id}
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

export default ContainerSales
