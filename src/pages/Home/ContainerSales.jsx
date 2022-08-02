import Card from '../../components/cards/Card'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import selectProducts from '../../store/filterProducts'
// fix here
const ContainerSales = () => {
  // const productsSales = useSelector(selectProducts)
  // const distpatch = useDispatch()
  // useEffect(() => {
  //   distpatch({ type: 'filter/set', payload: 'sale min' })
  // }, [])

  return (
    <div id='sale-container' className='grid grid-cols-6 w-[90%] mx-auto grid-rows-[320px]'>
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='Space Moon Smartwatch With Charger'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='OVE Light Space 5G, 128GB'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='Pilates 16" Touch Screen Laptop 24GB Memory'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='Turn5 Portable Bluetooth Speaker'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='Journey Glass XD Virtual Reality Headset'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        desc='H1C Indoor Wireless 1080p Network Security Camera'
        price='85.00'
        offer='70.00'
      />
    </div>
  )
}

export default ContainerSales
