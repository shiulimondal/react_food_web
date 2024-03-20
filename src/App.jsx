import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Cart from './Page/Cart/Cart'
import PlaceOrder from './Page/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Hero from './Components/HeroSection/Hero'

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {
      showLogin ? <Login setShowLogin={setShowLogin}/>:<></>
    }
     <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
      </Routes>
    
    </div>
    <Footer/>
    </>
   
    
  )
}

export default App
