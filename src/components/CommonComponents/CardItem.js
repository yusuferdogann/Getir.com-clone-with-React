import React from 'react'

export default function CardItem(props) {
  return (

         <div className='mx-2 Card col'>
       <div className='Card_content d-flex align-self-center'>
       <div className='Card_content_detail mx-3'>
       <img className='my-3 mx-auto' src={props.image}/>
        <h5 className='text-center'>{props.title}</h5>
        <p className='text-center'>{props.subtitle}</p>
       </div>
       </div>
    </div>
  
  )
}

