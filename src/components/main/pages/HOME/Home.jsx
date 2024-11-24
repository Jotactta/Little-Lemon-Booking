import { useState } from 'react'

import LoadingScreen from './LoadingScreen/LoadingScreen.jsx'
import HomeSection1 from './HOME-SECTION1/HomeSection1.jsx'
import HomeSpecials from './HomeSpecials/HomeSpecials.jsx'
import HomeTestimonials from './HomeTestimonials/HomeTestimonials.jsx'

import image2 from '../../../../assets/images/image2.jpg'
import image3 from '../../../../assets/images/image3.jpg'
import image4 from '../../../../assets/images/image4.jpg'
import image5 from '../../../../assets/images/image5.jpg'

import simage1 from '../../../../assets/images/simage1.jpg'
import simage2 from '../../../../assets/images/simage2.jpg'
import simage3 from '../../../../assets/images/simage3.jpg'
import simage4 from '../../../../assets/images/simage4.jpg'
import simage5 from '../../../../assets/images/simage5.jpg'

import avatar1 from '../../../../assets/images/avatar1.jpg'
import avatar2 from '../../../../assets/images/avatar2.jpg'
import avatar3 from '../../../../assets/images/avatar3.jpg'
import avatar4 from '../../../../assets/images/avatar4.jpg'

import './Home.css'

function Home () {
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

  const cards = [
    { image: simage1, title: SPECIAL1, price: PRICE1, text: SPECIAL1_TEXT },
    { image: simage2, title: SPECIAL2, price: PRICE2, text: SPECIAL2_TEXT },
    { image: simage3, title: SPECIAL3, price: PRICE3, text: SPECIAL3_TEXT },
    { image: simage4, title: SPECIAL4, price: PRICE4, text: SPECIAL4_TEXT },
    { image: simage5, title: SPECIAL5, price: PRICE5, text: SPECIAL5_TEXT }
  ]

  const testimonials = [
    { image: avatar1, name: NAME1, review: REVIEW1 },
    { image: avatar2, name: NAME2, review: REVIEW2 },
    { image: avatar3, name: NAME3, review: REVIEW3 },
    { image: avatar4, name: NAME4, review: REVIEW4 }
  ]

  const [isLoading, setIsLoading] = useState('notLoad')

  return (
    <>

      <main className='home'>

        <HomeSection1 isLoading={isLoading} setIsLoading={setIsLoading} />
        <HomeSpecials cards={cards} intervalTime={5000} className='homeSpecials' />
        <HomeTestimonials testimonials={testimonials} />
        <section className='section4'>
          <article className='sec4_text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>{TEXT2}</p>
          </article>

          <div className='sec4_images'>
            <div>
              <div className='sec4_img1'><img src={image2} loading='lazy' alt='Little Lemon Restaurant pic' /></div>
              <div className='sec4_img2'><img src={image3} loading='lazy' alt='Mario and Adrian pic' /></div>
            </div>

            <div>
              <div className='sec4_img3'><img src={image4} loading='lazy' alt='Adrian pic' /></div>
              <div className='sec4_img4'><img src={image5} loading='lazy' alt='Mario and Adrian pic' /></div>
            </div>
          </div>
        </section>

      </main>
      <LoadingScreen isLoading={isLoading} />

    </>
  )
}

export default Home
