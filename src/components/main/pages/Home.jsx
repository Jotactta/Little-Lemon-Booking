import Button from '../../Button.jsx'
import Card from '../../Card.jsx'
import TestimonialCard from '../../TestimonialCard.jsx'

import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'
import image4 from '../../../assets/images/image4.jpg'
import image5 from '../../../assets/images/image5.jpg'

import simage1 from '../../../assets/images/simage1.jpg'
import simage2 from '../../../assets/images/simage2.jpg'
import simage3 from '../../../assets/images/simage3.jpg'
import simage4 from '../../../assets/images/simage4.jpg'
import simage5 from '../../../assets/images/simage5.jpg'

import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import avatar4 from '../../../assets/images/avatar4.jpg'

import './Home.css'

const TEXT1 = 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.'

const SPECIAL1 = 'Greek Salad'
const SPECIAL1_TEXT = 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
const PRICE1 = '$12.99'

const SPECIAL2 = 'Bruschetta'
const SPECIAL2_TEXT = 'Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.'
const PRICE2 = '$14.99'

const SPECIAL3 = 'Lemon Cake'
const SPECIAL3_TEXT = 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
const PRICE3 = '$8.99'

const SPECIAL4 = 'Grilled Salmon'
const SPECIAL4_TEXT = 'Faroe Island salmon fillet with scallions, capers, and lemon sauce.'
const PRICE4 = '$34.99'

const SPECIAL5 = 'Fried Calamari'
const SPECIAL5_TEXT = 'Tender pieces of squid, lightly fried with arrabbiata sauce and green mayonnaise.'
const PRICE5 = '$17.99'

const NAME1 = 'Selena G.'
const REVIEW1 = '"Really enjoyed the atmosphere."'

const NAME2 = 'Brandon M.'
const REVIEW2 = '"The greek salad was excellent!"'

const NAME3 = 'Peter R.'
const REVIEW3 = '"You have to try the Greek Salad!"'

const NAME4 = 'Neha J.'
const REVIEW4 = '"Awesome place peaceful atmosphere with delicious food"'

const TEXT2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.'

function Home () {
  return (
    <main>
      <section className='section1'>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <h3>{TEXT1}</h3>
          <Button className='button1' link='/reservations'>Reserve a Table</Button>
        </article>

        <img src={image1} alt='Little Lemon food image' />

      </section>

      <section className='section2'>

        <h1>Specials</h1>

        <div className='cards'>
          <div>
            <Card image={simage1} tittle={SPECIAL1} price={PRICE1} text={SPECIAL1_TEXT} />
            <Card image={simage2} tittle={SPECIAL2} price={PRICE2} text={SPECIAL2_TEXT} />
            <Card image={simage3} tittle={SPECIAL3} price={PRICE3} text={SPECIAL3_TEXT} />
            <Card image={simage4} tittle={SPECIAL4} price={PRICE4} text={SPECIAL4_TEXT} />
            <Card image={simage5} tittle={SPECIAL5} price={PRICE5} text={SPECIAL5_TEXT} />
          </div>

        </div>
      </section>

      <section className='section3'>
        <h1>Testimonials</h1>
        <div>
          <TestimonialCard image={avatar1} name={NAME1} text={REVIEW1} />
          <TestimonialCard image={avatar2} name={NAME2} text={REVIEW2} />
          <TestimonialCard image={avatar3} name={NAME3} text={REVIEW3} />
          <TestimonialCard image={avatar4} name={NAME4} text={REVIEW4} />

        </div>
      </section>

      <section className='section4'>
        <article className='sec4_text'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>{TEXT2}</p>
        </article>

        <div className='sec4_images'>
          <div>
            <div className='sec4_img1'><img src={image2} alt='Little Lemon Restaurant pic' /></div>
            <div className='sec4_img2'><img src={image3} alt='Mario and Adrian pic' /></div>
          </div>

          <div>
            <div className='sec4_img3'><img src={image4} alt='Adrian pic' /></div>
            <div className='sec4_img4'><img src={image5} alt='Mario and Adrian pic' /></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
