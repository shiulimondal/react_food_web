import React, { useContext } from 'react'
import './FoodItem.css'
import rating from '../../assets/rating.png'
import add_icon from '../../assets/plus.png'
import remove_icon from '../../assets/minus.png'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ item }) => {
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img src={item.image} alt="" className='food-item-img' />
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{item.name}</p>
                    <p className='food-item-price'>₹{item.price}</p>
                </div>
                <p className='food-item-description'>{item.details}</p>

                <div className='food-item-bottom'>
                    <div className='food-item-add-rating-button'>
                        <img src={rating} alt="" className='rating-image' />
                        <h4>4.2</h4>
                    </div>
                    {
                    !cartItems[item._id]?
                    <button  onClick={()=>addToCart(item._id)}>Add to Cart</button>
                    :
                    <div className='food-item-counter'>
                            <img onClick={()=>addToCart(item._id)} src={add_icon} alt=""className='counter-img' />
                            <p>{cartItems[item._id]}</p>
                            <img onClick={()=>removeFromCart(item._id)} src={remove_icon} alt=""className='counter-img' />
                    </div>

                }
                   
                </div>


            </div>

        </div>
    )
}

export default FoodItem
