import React from 'react'
import '../../assets/css/Categories.css'
import C1 from '../../assets/images/getirc1.jpeg'
import C2 from '../../assets/images/getirc2.jpeg'
import C3 from '../../assets/images/getirc3.jpeg'

export default function Categories(props) {
  return (

    
     
      <div className='category_card'>
      
       <div className='category_content grid-item'><img src={props.image}/></div>
        <div className='category_content grid-item text-center'><h6>{props.name}</h6></div>
       </div>
    
   
   
   
  )
}
