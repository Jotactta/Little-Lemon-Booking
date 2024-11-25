import { FooterNav } from './FooterNav.jsx'
import logo from '../../assets/images/logos/logo1.svg'
import locationIcon from '../../assets/images/icons/location_icon.png'
import phoneIcon from '../../assets/images/icons/phone_icon.png'
import emailIcon from '../../assets/images/icons/email_icon.png'
import fbIcon from '../../assets/images/icons/fb_icon.png'
import igIcon from '../../assets/images/icons/ig_icon.png'
import xIcon from '../../assets/images/icons/x_icon.png'

import './Footer.css'

const ADRESS = 'Main Avenue #35-221'
const PHONE_NUMBER = '123456'
const EMAIL = 'littlelemon@gmail.com'

const FB_LINK = 'https://www.facebook.com'
const X_LINK = 'https://www.twitter.com'
const IG_LINK = 'https://www.instagram.com'

export function Footer () {
  return (
    <footer>
      <img className='footer_logo' alt='little lemon logo' src={logo} />
      <FooterNav />

      <section className='contact'>
        <h3>Contact</h3>
        <div>
          <div className='contact_info'>
            <img className='footer_icon' alt='location icon' loading='lazy' src={locationIcon} />
            <p>{ADRESS}</p>
          </div>

          <div className='contact_info'>
            <img className='footer_icon' alt='phone icon' loading='lazy' src={phoneIcon} />
            <p>{PHONE_NUMBER}</p>
          </div>

          <div className='contact_info'>
            <img className='footer_icon' alt='email icon' loading='lazy' src={emailIcon} />
            <p>{EMAIL}</p>
          </div>
        </div>

      </section>

      <section className='social_media'>
        <h3>Follow Us</h3>

        <div className='social_media_links'>
          <div>
            <a href={FB_LINK} target='_blank' aria-label='On Click' rel='noreferrer'><img className='footer_icon' alt='facebook icon' loading='lazy' src={fbIcon} /></a>
          </div>

          <div>
            <a href={IG_LINK} target='_blank' aria-label='On Click' rel='noreferrer'><img className='footer_icon' alt='instagram icon' loading='lazy' src={igIcon} /></a>
          </div>

          <div>
            <a href={X_LINK} target='_blank' aria-label='On Click' rel='noreferrer'><img className='footer_icon' alt='twitter icon' loading='lazy' src={xIcon} /></a>
          </div>
        </div>
      </section>
    </footer>
  )
}
