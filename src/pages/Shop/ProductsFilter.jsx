import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/cards/Card'
import selectProducts from '../../helpers/filterProducts'

const ProductsFilter = ({ categoryFilter }) => {
  const dispatch = useDispatch()
  const products = useSelector(selectProducts)

  useEffect(() => {
    dispatch({ type: 'filter/set', payload: { type: categoryFilter } })
  }, [categoryFilter])

  return (
    <div
      className='w-full grid grid-cols-4'
    >
      {
        products.length
          ? products.map(product => {
            const { nameProduct, description, price, priceSale, isSale, imgURL, id } = product
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
          : <h1>Oh no!! We have no products :(</h1>
      }

    </div>
  )
}

export default ProductsFilter
