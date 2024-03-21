import React from 'react'
import banner_img from '../../assets/herosection.jpg'
import './HeroSection.css'

const Hero = () => {
  return (
    <div className='hero-container'>
      <img src={banner_img} alt="" className='hero-img' />
      <div className="text-overlay">
        <h1>Welcome to Our Website</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
  )
}

export default Hero
