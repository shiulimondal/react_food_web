import React, { useState } from 'react'
import './Home.css'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Hero from '../../Components/HeroSection/Hero'

const Home = () => {
  const [category, setCategory] = useState("AllData")
  return (
    <div>
      <div className='home'>
        <Hero />
        <div className='home-cointer'>
          <ExploreMenu category={category} setCategory={setCategory} />
          <FoodDisplay category={category} />
        </div>

      </div>
    </div>

  )
}

export default Home
