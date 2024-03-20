
import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
    return (
        <div className='explore-menu' id='explore-menu' >
            <h1>Explore our Menu</h1>
            
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (

                     <div
                         onClick={()=>setCategory(prev=>prev=== item.title?"AllData":item.title)}
                        key={index} className='explore-menu-list-item'>
                        <div className='menu-list-img'>
                            <img 
                            className={category===item.title?"active":""}
                            src={item.menu_img} alt="" />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ExploreMenu

