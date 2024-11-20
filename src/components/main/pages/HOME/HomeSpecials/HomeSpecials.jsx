import { useState, useEffect, useRef } from 'react'

import Card from './Card/Card.jsx'

import arrowRight from './arrow_right.png'
import arrowLeft from './arrow_left.png'

import './HomeSpecials.css'

function HomeSpecials ({ cards, intervalTime, className }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [slideTime, setSlideTime] = useState(intervalTime)
  const availableClick = useRef('true')

  if (slideIndex > cards.length - 1) { setSlideIndex(0) }
  if (slideIndex < 0) { setSlideIndex(cards.length - 1) }

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideTime(intervalTime)
      setSlideIndex(slideIndex + 1)
      availableClick.current = 'false'
    }, slideTime)

    return () => clearInterval(timer)
  }, [slideIndex])

  function handleClick (direction) {
    if (availableClick.current === 'false') return
    setSlideTime(40000)
    if (direction === 'right') { setSlideIndex(slideIndex + 1) }
    if (direction === 'left') { setSlideIndex(slideIndex - 1) }
    availableClick.current = 'false'
  }

  return (
    <section className={className}>
      <h1>This Week Specials!</h1>
      <div className='arrowContainer'>
        <div className='cardsContainer'>
          {cards.map((card, index) => {
            let position = 'none'
            const { image, title, price, text } = card

            if (index === slideIndex) { position = 'centerCard' }

            if (index === slideIndex + 1 ||
              (index === 0 && slideIndex === cards.length - 1)) { position = 'rightCard' }

            if (index === slideIndex - 1 ||
              (index === cards.length - 1 && slideIndex === 0)) { position = 'leftCard' }

            if (index === slideIndex + 2 ||
              (index === 0 && slideIndex === cards.length - 2) ||
              (index === 1 && slideIndex === cards.length - 1)) { position = 'nextCard' }

            if (index === slideIndex - 2 ||
              (index === cards.length - 1 && slideIndex === 1) ||
              (index === cards.length - 2 && slideIndex === 0)) { position = 'prevCard' }

            return (
              <Card
                key={index}
                className={`cards ${position}`}
                availableClick={availableClick}
                image={image}
                title={title}
                price={price}
                text={text}
              />
            )
          })}
        </div>

        <div className='arrowLeft' onClick={() => handleClick('left')}>
          <img src={arrowLeft} className='arrow' />
        </div>

        <div className='arrowRight' onClick={() => handleClick('right')}>
          <img src={arrowRight} className='arrow' />
        </div>
      </div>

    </section>
  )
}

export default HomeSpecials
