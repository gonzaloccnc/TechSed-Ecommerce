import React from 'react'
import CardRounded from '../../components/cards/CardRounded'

const ContainerCategory = () => {
  return (
    <div className='grid grid-cols-rounded place-content-center gap-14'>
      <CardRounded
        categoryImg='.\src\assets\products\Laptops\category-laptop.png'
        category='Computers'
        path='shop/computers'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Phones\category-phone.png'
        category='Mobile'
        path='shop/mobile'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Drones\category-drone.png'
        category='Drones & Cameras'
        path='shop/dronesCameras'
      />
      <CardRounded
        categoryImg='.\src\assets\products\category-offer.png'
        category='Sale'
        path='shop/sale'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Tablets\category-tablet.png'
        category='Tablets'
        path='shop/tablets'
      />
      <CardRounded
        categoryImg='.\src\assets\products\category-seller.png'
        category='Best Sellers'
        path='shop/sale'
      />
      <CardRounded
        categoryImg='.\src\assets\products\TVs\category-homeCinema.png'
        category='TV & Home Cinema'
        path='shop/tvCinema'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Clocks\category-smartwatch.png'
        category='Wearable Tech'
        path='shop/wearableTech'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Audio\category-speakers.png'
        category='Speakers'
        path='shop/audio/speakers'
      />
      <CardRounded
        categoryImg='.\src\assets\products\Audio\category-headphones.png'
        category='Headphones'
        path='shop/audio/headphones'
      />
    </div>
  )
}

export default ContainerCategory
