import { useState, useEffect } from 'react'

import './CarouselAuto2.css'

function CarouselAuto2 ({ images, setIsLoading, intervalTime, className }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [startInterval, setStartItervval] = useState(false)
  if (slideIndex > images.length - 1) { setSlideIndex(0) }
  if (slideIndex < 0) { setSlideIndex(images.length - 1) }

  // useEffect to load images before loading screen dissapear
  useEffect(() => {
    const loadImage = (image, index) => {
      if (index < 1) {
        return new Promise((resolve) => {
          const loadImg = new Image()
          loadImg.src = image
          loadImg.onload = () => {
            resolve(image)
          }
        })
      }
    }

    Promise.all(images.map((image, index) => loadImage(image, index)))
      .then(() => {
        setTimeout(() => {
          setStartItervval(true)
          setIsLoading('load')
        }, 800)
      })
  }, [])

  useEffect(() => {
    let intervalRestart = true
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        intervalRestart = false
      } else { intervalRestart = true }
    })

    const timer = setInterval(() => {
      if (intervalRestart === true && startInterval === true) { setSlideIndex(slideIndex + 1) }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [slideIndex, startInterval])

  return (
    <div className={className}>
      <div className='homeCarouselContainer'>

        {images.map((image, index) => {
          let position = 'none'
          if (index === slideIndex) { position = 'active' }

          if (index === slideIndex + 1 ||
             (index === 0 && slideIndex === images.length - 1)) { position = 'next' }
          return (
            <img src={image} key={index} className={`slide ${position}`} />
          )
        })}

      </div>
    </div>
  )
}

export default CarouselAuto2
