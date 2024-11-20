import { useState, useRef, useEffect } from 'react'
import TestimonialCard from './TestimonialCard/TestimonialCard'

import './HomeTestimonials.css'

function HomeTestimonials ({ testimonials }) {
  const [containerClass, setContainerClass] = useState('hide')
  const cardContainer = useRef(null)

  const options = {
    root: null,
    threshold: 0.6,
    rootMargin: '0px'
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (containerClass === 'hide') { setContainerClass('show') }
      }
    }, options)
    if (cardContainer.current) { observer.observe(cardContainer.current) }
    return () => {
      if (cardContainer.current) { observer.unobserve(cardContainer.current) }
    }
  }, [])

  return (
    <section className='testimonials'>
      <h1>Testimonials</h1>
      <div className='testimonialsContainer' ref={cardContainer}>
        {testimonials.map((testimonial, index) => {
          const { image, name, review } = testimonial
          const className = 'position'

          return (
            <TestimonialCard
              image={image}
              name={name}
              text={review}
              className={`testiCard ${className + index} ${containerClass}`}
              key={image + name + review + index}
            />
          )
        })}
      </div>
    </section>
  )
}

export default HomeTestimonials
