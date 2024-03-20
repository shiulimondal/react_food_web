import React, { useState } from 'react'
import './Navbar.css'
import Logo from "../../assets/hunger.png"
import searchIcon from '../../assets/search.png'
import cart from '../../assets/cart.png'
import { Link } from 'react-router-dom'


const Navbar = ({ setShowLogin }) => {
    const [isExpanded, setIsExpanded] = useState(false);
 
    const toggleSearchBar = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className='Navbar'>
            <div className='navbar-left'>
                <Link to="/">
                    <img src={Logo} alt="Website Logo" className="logo-img" />
                </Link>

            </div>
            <div className="navbar-right">
               
                 <img src={searchIcon} alt="Search Icon" className='search-img' />
                <Link to='/Cart'>
                    <img src={cart} alt="Cart Icon" className='cart-img' />
                </Link>
                <button onClick={() => setShowLogin(true)}>signIn</button>

            </div>

        </div>
    )
}

export default Navbar
