
import Carousel from 'react-bootstrap/Carousel';
// d-md-block d-lg-block d-xl-block d-xxl-block d-none
const Slider = () => {
  return (
    <div className=' mb-20' >
        <Carousel indicators={false}>
      <Carousel.Item>
      <img src='img/Banner3.jpg'className='h-[450px]  d-md-block d-lg-block d-xl-block d-xxl-block d-none w-full' alt=''/>
      <img src='img/Banner3.jpg'className='h-[200px]  d-md-none d-xs-block d-lg-none d-xl-none d-xxl-none d-sm-block w-full' alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='img/Banner4.jpg'className='h-[450px]  d-md-block d-lg-block d-xl-block d-xxl-block d-none w-full' alt=''/>
      <img src='img/Banner4.jpg'className='h-[200px]  d-md-none d-xs-block d-lg-none d-xl-none d-xxl-none d-sm-block w-full' alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='img/Banner5.png'className='h-[450px]  d-md-block d-lg-block d-xl-block d-xxl-block d-none w-full' alt=''/>
      <img src='img/Banner5.png'className='h-[200px]  d-md-none d-xs-block d-lg-none d-xl-none d-xxl-none d-sm-block w-full' alt=''/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='img/Banner7.jpg'className='h-[450px]  d-md-block d-lg-block d-xl-block d-xxl-block d-none w-full' alt=''/>
      <img src='img/Banner7.jpg'className='h-[200px]  d-md-none d-xs-block d-lg-none d-xl-none d-xxl-none d-sm-block w-full' alt=''/>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider
