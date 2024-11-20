import { useState, useEffect } from 'react'

import './CarouselAuto2.css'

function CarouselAuto2 ({ images, intervalTime, className }) {
  const [slideIndex, setSlideIndex] = useState(0)
  let nextSlide = slideIndex + 1
  if (slideIndex === images.length - 1) { nextSlide = 0 }

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex(slideIndex + 1)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [slideIndex])

  useEffect(() => {
    if (slideIndex > images.length - 1) { setSlideIndex(0) }
  }, [slideIndex])

  return (
    <div className={className}>
      <div className='homeCarouselContainer'>

        <img src={images[slideIndex]} key={slideIndex} className='slide2' style={{ animationDuration: `${intervalTime / 1000}s` }} />

        <img src={images[nextSlide]} key={nextSlide} className='nextSlide2' />

      </div>
    </div>
  )
}

export default CarouselAuto2
