import React from 'react'
import '../../assets/css/Offer.css'
import O1 from '../../assets/images/o1.jpeg'
import O2 from '../../assets/images/o2.png'
import O3 from '../../assets/images/o3.png'
import R1 from '../../assets/images/r1.png'
import R2 from '../../assets/images/r2.png'
import R3 from '../../assets/images/r3.png'
import O4 from '../../assets/images/o4.png'

export default function Offer(props) {
  return (
    <div className=''>
       
   
      <div className='position-relative'>
      <img className='offer_box_long' src={O3}/>
      <div className='d-flex   long_image_content justify-content-between'>
      <div className='offer_content position-absolute  align-items-center p-5'>
           <div className='offer_content_sub col-10 ms-3'>
           <h3 className='fw-bold mt-5'>Getir'i indirin!</h3>
            <h6 className='fw-bold mb-4'>{props.title}</h6>
           </div>
            <div className='redirect_storage ms-3'>
                <span className='me-2'><img style={{borderRadius:'8px',background:'red',width:'150px'}}  src={R1}/></span>
                <span className='me-2'><img style={{borderRadius:'10px',background:'red',width:'150px'}} src={R2}/></span>
                <span><img className='col-3' style={{borderRadius:'10px',background:'red',width:'150px'}} src={R3}/></span>
            </div>
      </div>
      <div className='perde' ><img  className='phone position-absolute'  src={props.image}/></div>
      </div>
  </div>
  </div>
  )
}
