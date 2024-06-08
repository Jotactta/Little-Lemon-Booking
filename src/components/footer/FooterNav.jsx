import { Link } from 'react-router-dom'

import './FooterNav.css'

export function FooterNav () {
  return (

    <nav className='footer_nav_bar'>
      <h3>Our Website</h3>
      <ul>
        <Link to='/' className='footerNavLink'>Home</Link>
        <Link to='/about' className='footerNavLink'>About</Link>
        <Link to='/menu' className='footerNavLink'>Menu</Link>
        <Link to='/reservations' className='footerNavLink'>Reservations</Link>
        <Link to='/order_online' className='footerNavLink'>Order Online</Link>
        <Link to='/login' className='footerNavLink'>Login</Link>
      </ul>
    </nav>

  )
}

export default FooterNav
