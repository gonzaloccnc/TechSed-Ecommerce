import { useEffect, useState } from 'react'

import Card from '../../components/cards/Card'
/*
This component will be in charge of sending the filtered products according to what the user requires
- {shopAll, Computers, phones, laptops, etc}
*/
const ProductsFilter = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const req = await fetch('http://localhost:4000/api/products/')
    const myd = await req.json()
    setData(myd)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='w-full grid grid-cols-4'>
      {
        data.length
          ? data.map(product => {
            const { nameProduct, description, price, isSale, imgURL, id } = product
            return (
              <Card
                key={id}
                product={imgURL}
                desc={`${nameProduct} - ${description}`}
                price={price}
              />
            )
          })
          : <h1>cargando....</h1>
      }

    </div>
  )
}

export default ProductsFilter
