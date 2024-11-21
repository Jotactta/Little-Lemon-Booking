import { useState, useEffect } from 'react'
import LoadingScreen from './LoadingScreen/LoadingScreen.jsx'

import image2 from '../../../../assets/images/image2.jpg'
import image3 from '../../../../assets/images/image3.jpg'
import image4 from '../../../../assets/images/image4.jpg'
import image5 from '../../../../assets/images/image5.jpg'

import './About.css'

function About () {
  const TEXT2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.'

  const [isLoading, setIsLoading] = useState('notLoad')

  useEffect(() => {
    setTimeout(() => {
      setIsLoading('load')
    }, '1000')
  }, [])
  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main className='about'>

        <article className='aboutText'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>{TEXT2}</p>
        </article>

        <div className='aboutImages'>
          <div>
            <div className='about_img1'><img src={image2} alt='Little Lemon Restaurant pic' /></div>
            <div className='about_img2'><img src={image3} alt='Mario and Adrian pic' /></div>
          </div>

          <div>
            <div className='about_img3'><img src={image4} alt='Adrian pic' /></div>
            <div className='about_img4'><img src={image5} alt='Mario and Adrian pic' /></div>
          </div>
        </div>
      </main>
    </>

  )
}

export default About
