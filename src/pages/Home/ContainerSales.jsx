import React from 'react'
import Card from '../../components/cards/Card'

const ContainerSales = () => {
  return (
    <div id='sale-container' className='grid grid-cols-6 w-[90%] mx-auto grid-rows-[320px]'>
      <Card
        product='.\src\assets\products\Clocks\spaceMoon-SmartWatch-withCharger.webp'
        desc='Space Moon Smartwatch With Charger'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Phones\ZPixel-phone.webp'
        desc='OVE Light Space 5G, 128GB'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Laptops\pilates16-Laptop-Touch.webp'
        desc='Pilates 16" Touch Screen Laptop 24GB Memory'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Audio\Turn5-Speaker-PortableBluetooth.webp'
        desc='Turn5 Portable Bluetooth Speaker'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Computers\journeyGlassXD-VR.webp'
        desc='Journey Glass XD Virtual Reality Headset'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Cameras\H1CIndoor-SecurityCamera.webp'
        desc='H1C Indoor Wireless 1080p Network Security Camera'
        price='85.00'
        offer='70.00'
      />
    </div>
  )
}

export default ContainerSales
