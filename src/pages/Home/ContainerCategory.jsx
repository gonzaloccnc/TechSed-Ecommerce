import React from 'react'
import CardRounded from '../../components/cards/CardRounded'

const ContainerCategory = () => {
  return (
    <div className='grid grid-cols-rounded place-content-center gap-14'>
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Computers/JP-GAMES-15,6p-256GB.webp'
        category='Computers'
        path='shop/computers'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Phones/ZPixelMax-128GB.webp'
        category='Mobile'
        path='shop/mobile'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/DronsCameras/HKITech-Drone.webp'
        category='Drones & Cameras'
        path='shop/dronesCameras'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Category/category-offer.png'
        category='Sale'
        path='shop/sale'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Tablets/SpaceS7-12p-128GB.webp'
        category='Tablets'
        path='shop/tablets'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Category/category-seller.png'
        category='Best Sellers'
        path='shop/sale'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/TVHomeCinema/Allure-55p-LED4KUHD.webp'
        category='TV & Home Cinema'
        path='shop/tvCinema'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/WearableTech/FitWatchXDH.webp'
        category='Wearable Tech'
        path='shop/wearableTech'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Speakers/Turn5-Speaker-Portable-blue2.webp'
        category='Speakers'
        path='shop/audio/speakers'
      />
      <CardRounded
        categoryImg='https://ecommerce-api-practice.herokuapp.com/api/images/Headphones/Headphones-MX50.webp'
        category='Headphones'
        path='shop/audio/headphones'
      />
    </div>
  )
}

export default ContainerCategory
