import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import no_data from '../../assets/empty.png'

function FoodDisplay({category}) {
  const { food_list } = useContext(StoreContext)

  const filteredItems = food_list.filter(item =>
    category === "AllData" || category === item.category
  );

  return (
    <div className='food-display' id='food-display'>
    <h2>Top dishes near you</h2>
    <div className='food-display-list'>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))
      ) : (
        <div className='no-data-found'>
<img src={no_data} alt=""  />
        </div>
      )}
    </div>
  </div>
  )
}

export default FoodDisplay

