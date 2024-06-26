import { Routes, Route, Link } from "react-router-dom"
import Home from '../main/pages/Home.jsx';
import About from '../main/pages/About.jsx';
import Menu from '../main/pages/Menu.jsx';
import Reservations from '../main/pages/Reservations.jsx';
import OrderOnline from '../main/pages/OrderOnline.jsx';
import Login from '../main/pages/Login.jsx';
import ConfirmedBooking from '../main/pages/ConfirmedBooking.jsx';

import logo from '../../assets/images/logos/logo1.svg';
import './Nav.css';




export function Nav({ times, dispatch, successfulSubmit, submitDispatch }) {
    return (
        <>
            <header>
                <nav className="nav_bar">
                    <img className='header_logo' alt='little lemon logo' src={logo} />
                    <ul>
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/about" className="navLink">About</Link>
                        <Link to="/menu" className="navLink">Menu</Link>
                        <Link to="/reservations" className="navLink">Reservations</Link>
                        <Link to="/order_online" className="navLink">Order Online</Link>
                        <Link to="/login" className="navLink">Login</Link>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations/*" element={<Reservations times={times} dispatch={dispatch} successfulSubmit={successfulSubmit} submitDispatch={submitDispatch} />} />
                <Route path="/order_online" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
                <Route path="/confirmed_booking" element={<ConfirmedBooking submitDispatch={submitDispatch} />} />

            </Routes>

        </>
    )
}

export default Nav;