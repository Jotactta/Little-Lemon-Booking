import { Routes, Route, Link } from "react-router-dom"
import Home from '../main/pages/Home.jsx';
import About from '../main/pages/About.jsx';
import Menu from '../main/pages/Menu.jsx';
import Reservations from '../main/pages/Reservations.jsx';
import OrderOnline from '../main/pages/OrderOnline.jsx';
import Login from '../main/pages/Login.jsx';



export function Nav () {
    return (
        <>
        <nav>
            <ul>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/about" className="navLink">About</Link>
                <Link to="/menu" className="navLink">Menu</Link>
                <Link to="/reservations" className="navLink">Reservations</Link>
                <Link to="/order_online" className="navLink">Order Online</Link>
                <Link to="/login" className="navLink">Login</Link>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/reservations" element={<Reservations/>}/>
            <Route path="/order_online" element={<OrderOnline/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </>

    )
}

export default Nav;