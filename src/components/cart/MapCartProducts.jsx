import { useLocalStorage } from '../../hooks/useLocalStorage'
import ProductCart from './ProductCart'

const MapCartProducts = () => {
  const [cart] = useLocalStorage('cart', [])

  return (
    <>
      {
        !cart.length
          ? <p className='text-center py-8 text-lg'>The cart is empty</p>
          : cart.map(prd => {
            const { id, imgURL, nameProduct, isSale, description, price, priceSale, amount } = prd
            return (
              <ProductCart
                key={id}
                id={id}
                img={imgURL}
                name={nameProduct}
                desc={description}
                price={price}
                priceSale={priceSale}
                amount={amount}
                isSale={isSale}
              />
            )
          })
        }
    </>
  )
}

export default MapCartProducts
