import Card from '../../components/cards/Card'

const ContainerSellerCard = () => {
  return (
    <div id='seller-container' className='grid grid-cols-6 w-[90%] mx-auto grid-rows-[320px]'>
      <Card
        product='./src/assets/products/Clocks/FitbootInspire-SmartWatch.webp'
        desc='Fitboot Inspire Fitness Tracker With Heart Rate Tracking'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Laptops\JPGaming-Laptop.webp'
        desc='JP Gaming Laptop 15.6" Laptop 256GB'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Drones\HKI-tech-Drone.webp'
        desc='HKI Tech Quadcopter Drone With 360 Camera & Controller'
        price='85.00'
      />
      <Card
        product='.\src\assets\products\Phones\ZPixel-max-phone.webp'
        desc='Smartphone Z Pixel Max 128GB Unlocked'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Audio\InEar-Headphones-Bluetooth.webp'
        desc='In-ear Noise Cancelling & Isolating Wireless Earbuds'
        price='85.00'
        offer='70.00'
      />
      <Card
        product='.\src\assets\products\Computers\safayGen2-VR.webp'
        desc='Safay GEN 2 256GB VR headset With Touch Controllers'
        price='85.00'
      />
    </div>
  )
}

export default ContainerSellerCard
