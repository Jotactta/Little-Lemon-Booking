import { Routes, Route, Link } from 'react-router-dom'
import { useState, useRef } from 'react'

import Home from '../main/pages/HOME/Home.jsx'
import About from '../main/pages/ABOUT/About.jsx'
import Menu from '../main/pages/MENU/Menu.jsx'
import Reservations from '../main/pages/RESERVATIONS/Reservations.jsx'
import OrderOnline from '../main/pages/ORDER_ONLINE/OrderOnline.jsx'
import Login from '../main/pages/LOGIN/Login.jsx'
import ConfirmedBooking from '../main/pages/RESERVATIONS/ConfirmedBooking.jsx'
import NavLink from './NavigationLink/NavLink.jsx'

import navLogo from '../../assets/images/logos/logo1.svg'

import burgerIcon from './burger_icon.png'

import './MenuNav.css'

function MenuNav ({ className, times, dispatch, successfulSubmit, submitDispatch }) {
  const links = [
    { component: <Home />, linkTo: '/', buttonText: 'HOME', hoverBackground: 'rgba(244, 206, 20, 0.8)' },
    { component: <Menu />, linkTo: '/Menu', buttonText: 'MENU', hoverBackground: 'rgba(244, 206, 20, 0.8)' },
    { component: <Reservations times={times} dispatch={dispatch} successfulSubmit={successfulSubmit} submitDispatch={submitDispatch} />, linkTo: '/Reservations', buttonText: 'RESERVATIONS', hoverBackground: 'rgba(244, 206, 20, 0.8)' },
    { component: <OrderOnline />, linkTo: '/OrderOnline', buttonText: 'ORDER ONLINE', hoverBackground: 'rgba(244, 206, 20, 0.8)' },
    { component: <About />, linkTo: '/About', buttonText: 'ABOUT', hoverBackground: 'rgba(244, 206, 20, 0.8)' },
    { component: <Login />, linkTo: '/Login', buttonText: 'LOGIN', hoverBackground: 'rgba(244, 206, 20, 0.8)' }
  ]

  const [SCMenuStatus, setSCMenuStatus] = useState('hide')
  const SCMenu = useRef(null)
  const SCMenuIcon = useRef(null)

  function handleClick () {
    if (SCMenuStatus === 'hide') { setSCMenuStatus('show') } else { setSCMenuStatus('hide') }
  }

  document.addEventListener('mousedown', (e) => {
    if (SCMenuStatus === 'show' && !SCMenu.current.contains(e.target)) {
      if (!SCMenuIcon.current.contains(e.target)) {
        setSCMenuStatus('hide')
      }
    }
  })

  /* Scroll listener to show or hide navigation menu */
  const [scrollClass, setScrollClass] = useState('show')
  let scrollPosition = window.scrollY

  function handleScroll () {
    if (window.scrollY > scrollPosition) { setScrollClass('hide') }
    if (window.scrollY < scrollPosition) { setScrollClass('show') }
    if (window.scrollY === scrollPosition) return
    scrollPosition = window.scrollY
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <div className={className}>

      <nav className={`navContainer ${scrollClass}`}>
        <Link to='/' className={`logoContainer ${scrollClass}`}>
          <img className='navLogo' alt='little lemon logo' src={navLogo} />
        </Link>
        <ul className='navMenu'>
          {links.map((link, index) => {
            const { linkTo, buttonText, hoverBackground } = link
            return (
              <Link to={linkTo} className={`linkContainer ${scrollClass}`} key={index + buttonText + hoverBackground}>
                <NavLink hoverBackground={hoverBackground}>{buttonText}</NavLink>
              </Link>
            )
          })}
        </ul>

        <div className='SCMenuIcon' onClick={handleClick} ref={SCMenuIcon}>
          <img src={burgerIcon} />
        </div>
      </nav>

      <nav className={`SCMenu ${SCMenuStatus}`} ref={SCMenu}>
        <ul>
          {links.map((link, index) => {
            const { linkTo, buttonText, hoverBackground } = link
            return (
              <Link to={linkTo} className='SClinkContainer' key={index + buttonText}>
                <NavLink hoverBackground={hoverBackground}>{buttonText}</NavLink>
              </Link>
            )
          })}
        </ul>

      </nav>

      <Routes>
        {links.map((link, index) => {
          const { component, linkTo } = link
          return (
            <Route path={linkTo} element={component} key={index + linkTo} />
          )
        })}

        <Route path='/confirmed_booking' element={<ConfirmedBooking submitDispatch={submitDispatch} />} />

      </Routes>

    </div>
  )
}

export default MenuNav
