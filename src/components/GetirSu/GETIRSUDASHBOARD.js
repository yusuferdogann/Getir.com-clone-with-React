import React from 'react'
import Navbar from '../CommonComponents/Navbar'
import GetirSuSlider from '../GetirSu/GetirSuSlider'
import GetirSuCategories from '../GetirSu/GetirSuCarausel'
import OfferBottom from '../CommonComponents/OfferBottom'
import GetirSuCards from '../GetirSu/GetirSuCards'
import Fotter from '../CommonComponents/Fotter'
import FotterSub from '../CommonComponents/FotterSub'
import BuyukCarasousel from '../CommonComponents/BuyukCarousel'
import GetirSuOfferBottom from "../../assets/images/GetirSuImages/getirsuofferbottom.png"


export default function GETIRSUDASHBOARD() {
  return (
    <div> 
    <Navbar/>
    <GetirSuSlider/>
   <div className='getirsu_section'>
  
     <GetirSuCategories/>
    <OfferBottom
     title='Damacana suyunuzu GetirSu ile dakikalar içinde kapınıza getirelim.'
     image={GetirSuOfferBottom}/>
    <GetirSuCards/>
    <Fotter/>
    <FotterSub/>
   </div>
    </div>
  )
}
