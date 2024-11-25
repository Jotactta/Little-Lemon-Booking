import './TestimonialCard.css'

function TestimonialCard ({ image, name, text, className }) {
  return (
    <div className={className}>
      <article className='t_card'>
        <h3 className='rating'>⭐⭐⭐⭐⭐</h3>
        <div className='avatar'><img src={image} loading='lazy' alt={`${name}'s avatar image`} /></div>
        <h3>{name}</h3>
        <p>{text}</p>
      </article>
    </div>
  )
}

export default TestimonialCard
