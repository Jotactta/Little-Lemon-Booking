import {FooterNav} from './FooterNav.jsx';
import logo from '../../assets/images/logos/logo1.svg';
import location_icon from '../../assets/images/icons/location_icon.png';
import phone_icon from '../../assets/images/icons/phone_icon.png';
import email_icon from '../../assets/images/icons/email_icon.png';
import fb_icon from '../../assets/images/icons/fb_icon.png';
import ig_icon from '../../assets/images/icons/ig_icon.png';
import x_icon from '../../assets/images/icons/x_icon.png';

import './Footer.css';


const ADRESS = 'direccion'
const PHONE_NUMBER = '123456'
const EMAIL = 'littlelemon@gmail.com'

const FB_LINK = 'https://www.facebook.com'
const X_LINK = 'https://www.twitter.com'
const IG_LINK = 'https://www.instagram.com'


export function Footer () {
    return (
        <footer>
        <img className='footer_logo' alt='little lemon logo' src={logo}/>
        <FooterNav/>


        <div className='contact'>
            <h3>Contact</h3>
            <div>
            <div className='contact_info'>
                <img className='footer_icon' alt='location icon' src={location_icon}/>
                <p>{ADRESS}</p>
            </div>

            <div className='contact_info'>
                <img className='footer_icon' alt='phone icon' src={phone_icon}/>
                <p>{PHONE_NUMBER}</p>
            </div>

            <div className='contact_info'>
                <img className='footer_icon' alt='email icon' src={email_icon}/>
                <p>{EMAIL}</p>
            </div>
            </div>


        </div>



        <div className='social_media'>
            <h3>Social Media</h3>

            <div className='social_media_links'>
              <div>
                  <a href={FB_LINK} target='_blank'><img className='footer_icon' alt='facebook icon' src={fb_icon}/></a>
              </div>

              <div>
                  <a href={IG_LINK} target='_blank'><img className='footer_icon' alt='instagram icon' src={ig_icon}/></a>
              </div>

              <div>
                  <a href={X_LINK} target='_blank'><img className='footer_icon' alt='twitter icon' src={x_icon}/></a>
              </div>
            </div>
        </div>
        </footer>
    )
}