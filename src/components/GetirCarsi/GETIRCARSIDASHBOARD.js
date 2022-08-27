import React from 'react'
import Navbar from '../CommonComponents/Navbar'
import GetirCarsiSlider from '../GetirCarsi/GetirCarsiSlider'
import GetirCarsiCategories from '../GetirCarsi/GetirCarsiCategories'
import OfferBottom from '../CommonComponents/OfferBottom'
import GetirCarsiCards from '../GetirCarsi/GetirCarsiCards'
import ApplyNow from '../CommonComponents/ApplyNow'
import Fotter from '../CommonComponents/Fotter'
import FotterSub from '../CommonComponents/FotterSub'
import GetirCarsiOfferBottom from "../../assets/images/GetirImages/getirofferbottom.png"
import LocationModal from '../CommonComponents/LocationModal'

export default function GETIRSUDASHBOARD() {
  return (
    <div> 
    <Navbar/>
    <GetirCarsiSlider/>
    <GetirCarsiCategories/> 
   <div className='getircarsi_section'>
    <OfferBottom
     title='İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.'
     image={GetirCarsiOfferBottom}/>
    <GetirCarsiCards/>
    <ApplyNow/>
    <Fotter/>
    <FotterSub/>
   </div>
    </div>
  )
}
