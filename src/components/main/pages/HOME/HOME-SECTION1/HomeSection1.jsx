import CarouselAuto2 from './CarouselAuto2/CarouselAuto2'
import Button from './Button/Button'

import image1 from './home_img1.jpg'
import image2 from './home_img2.jpg'
import image3 from './home_img3.jpg'
import image4 from './home_img4.jpg'

import './HomeSection1.css'

function HomeSection1 ({ isLoading }) {
  const images = [image1, image2, image3, image4]

  return (
    <section className='home'>
      <div className='homeContainer'>
        <div className='gradient'>
          <h1 className={`${isLoading}`}>Little Lemon</h1>
          <h2 className={`${isLoading}`}>Chicago</h2>
          <h3 className={`${isLoading}`}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
          <Button className='button1' isLoaded={isLoading} link='/reservations'>Reserve a Table</Button>
        </div>
        <CarouselAuto2 images={images} intervalTime={10000} className='homeSlider' />
      </div>
    </section>
  )
}

export default HomeSection1
