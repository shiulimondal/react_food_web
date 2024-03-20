import React from 'react'
import './Footer.css'
import Logo from '../../assets/hunger.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className='footer-content'>
                <div className='footer-left'>
                    <img src={Logo} alt="" title='Logo' className='logo-style' />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div>
                    <img src={facebook} alt="" className='footer-logo' />
                    <img src={instagram} alt="" className='footer-logo'/>
                    <img src={twitter} alt="" className='footer-logo'/>
                    </div>  
                </div>
                <div className='footer-center'>
                    <h2>Website</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h2>Come Again</h2>
                    <ul>
                        <li>+91 9876543211</li>
                        <li>hunger@contact.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 20024 © Hunger.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
