import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-filds'>
          <input type="text" name="" placeholder='First Name' />
          <input type="text" name="" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Phone Number' />
        <input type="text" placeholder='Address' />
        <div className='multi-filds'>
          <input type="text" name="" placeholder='Pin Code' />
          <input type="text" name="" placeholder='Land mark' />
        </div>
      </div>
      <div className='place-order-right'>
      <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>₹{20}</p>
            </div>
            <hr />
            <div className='cart-total-details'>
              <b>Total</b>
              <b>₹{getTotalCartAmount()+20}</b>
            </div>
           
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
