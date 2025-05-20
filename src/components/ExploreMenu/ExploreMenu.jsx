import React from 'react'
import styles from './ExploreMenu.css';
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Hungry? Let’s find the perfect meal for you</h1>
      <p className='explore-menu-text'>Browse through our carefully crafted menu categories to find the perfect dish — whether you're in the mood for something light, hearty, or sweet.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                   <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                   <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
