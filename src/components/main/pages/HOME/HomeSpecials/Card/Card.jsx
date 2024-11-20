import Button from './Button/Button.jsx'
import './Card.css'

function Card ({ image, title, price, text, className, availableClick }) {
  return (
    <article
      className={className}
      onTransitionEnd={() => { availableClick.current = 'true' }}
    >

      <div className='card'>
        <div className='card_image'><img src={image} alt={`${title} image`} /></div>

        <div className='card_tittle'>
          <h3>{title}</h3>
          <h3 className='price'>{price}</h3>
        </div>

        <p>{text}</p>

        <Button className='button_card' link='/OrderOnline'>Order Online</Button>
      </div>

    </article>
  )
}

export default Card
