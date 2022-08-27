import React from 'react'
import '../../assets/css/ApplyNow.css'
import O1 from '../../assets/images/getirFoodOffer.jpeg'
import O2 from '../../assets/images/CommonImages/applynow.jpeg'

export default function GetirFoodOffer() {
  return (
    <div className='applynow my-5'>
      <div className='position-relative'>
      <img className=''  style={{background:'',marginLeft:'0px',padding:'0px'}} src={O1}/>

      <div className='d-flex align-items-center justify-content-between applynow_content align-items-center' style={{width:'100%',background:'blue',marginLeft:'0px',height:''}}>
        <div className=''>
        <figure><img src={O2}/></figure>
        </div>
       <div className='applynow_detail' style={{background:''}}>
            <h4 className='fw-bold'>Restoran sahibi misiniz?</h4>
            <p  className=''>GetirYemek restoran iş ortaklarından biri olun işinizi daha az maliyetle büyütün müşteri memnuniyetini artırın</p>
        </div>
        <div>
            <button className='mainbutton btn btn-primary mx-4'>Hemen Basvur</button>
        </div>
       </div>
       
      </div>

      
        
      

    </div>

  )
}
