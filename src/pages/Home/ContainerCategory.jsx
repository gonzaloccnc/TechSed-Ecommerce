import React from 'react'
import CardRounded from '../../components/cards/CardRounded'

const ContainerCategory = () => {
  return (
    <div className='grid grid-cols-rounded place-content-center gap-14'>
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/computers/JP-15.6p256GBSSDPilatesGamingLaptop.webp'}
        category='Computers'
        path='shop/computers'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/phones/ZPixelMax-Smartphone125GBunlocked.webp'}
        category='Mobile'
        path='shop/mobile'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/drones&cameras/HKITech-quadricopterdronewithcameraand360command.webp'}
        category='Drones & Cameras'
        path='shop/dronesCameras'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/Category/category-offer.png'}
        category='Sale'
        path='shop/sale'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/tablets/SpaceS7-Tablet11p,128GBWi-Fi.webp'}
        category='Tablets'
        path='shop/tablets'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/Category/category-seller.png'}
        category='Best Sellers'
        path='shop/bestSellers'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/TV&HomeCinema/Allure-55pclassLED4KUHDSmartTV.webp'}
        category='TV & Home Cinema'
        path='shop/tvCinema'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/WearableTech/FitWatchXDH-Smartwatchfitness.webp'}
        category='Wearable Tech'
        path='shop/wearableTech'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/speakers/Turn5-bluetoothspeakerwithhandle.webp'}
        category='Speakers'
        path='shop/audio/speakers'
      />
      <CardRounded
        categoryImg={import.meta.env.VITE_API + '/api/images/headphones/MX50-wiredheadphones.webp'}
        category='Headphones'
        path='shop/audio/headphones'
      />
    </div>
  )
}

export default ContainerCategory
