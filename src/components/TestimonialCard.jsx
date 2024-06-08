import './TestimonialCard.css'

function TestimonialCard ({ image, name, text }) {
  return (
    <article className='t_card'>
      <h3 className='rating'>⭐⭐⭐⭐⭐</h3>
      <div className='avatar'><img src={image} alt={`${name}'s avatar image`} /></div>
      <h3>{name}</h3>
      <p>{text}</p>
    </article>
  )
}

export default TestimonialCard
