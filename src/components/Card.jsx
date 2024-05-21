import Button from './Button.jsx';
import './Card.css';

function Card({ image, tittle, price, text }) {
  return (
    <article className="card">

      <div className="card_image"><img src={image} alt={`${tittle} image`} /></div>

      <div className='card_tittle'>
        <h3>{tittle}</h3>
        <h3 className='price'>{price}</h3>
      </div>

      <p>{text}</p>

      <Button className="button_card" link="/order_online">Order Online</Button>
    </article>
  );
}

export default Card;