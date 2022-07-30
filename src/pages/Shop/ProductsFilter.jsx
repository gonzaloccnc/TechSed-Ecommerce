import Card from '../../components/cards/Card'
/*
This component will be in charge of sending the filtered products according to what the user requires
- {shopAll, Computers, phones, laptops, etc}
*/
const ProductsFilter = () => {
  return (
    <div className='w-full grid grid-cols-4'>
      {/* here map the products of DataBase */}
      <Card
        product='..\src\assets\products\Tablets\sheer-Tablet-10.2.webp'
        desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
        price='85.00'
      />
      <Card
        product='..\src\assets\products\Tablets\Jp-Space-Tablet-10.4.webp'
        desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='..\src\assets\products\Tablets\PilatesGo-Tablet-10.5.webp'
        desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
        price='85.00'
      />
      <Card
        product='..\src\assets\products\Tablets\ove-Tablet-10.3.webp'
        desc='Sheer 10.2" Tablet With Wi-Fi, 32GB'
        price='85.00'
        offer='70.00'
      />
    </div>
  )
}

export default ProductsFilter
