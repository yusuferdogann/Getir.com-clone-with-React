import React from 'react'
import '../../assets/css/Offer.css'
import O1 from '../../assets/images/o1.jpeg'
import O2 from '../../assets/images/o2.png'
import O3 from '../../assets/images/o3.png'
import R1 from '../../assets/images/r1.png'
import R2 from '../../assets/images/r2.png'
import R3 from '../../assets/images/r3.png'
import O4 from '../../assets/images/o4.png'

export default function Offer() {
  return (
    <div className=''>
        <h6 className=''>Kampanyalar</h6>
    <div className='d-flex my-4'>
        <div className='offer_box'>
            <img src={O1}/>
        </div>
        <div className='offer_box mx-3'>
            <img src={O2}/>
        </div>
      
    </div>
     
  </div>
  )
}
