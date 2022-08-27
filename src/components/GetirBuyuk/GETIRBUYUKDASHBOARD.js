import React from 'react'
import Navbar from '../CommonComponents/Navbar'
import GetirBuyukSlider from '../GetirBuyuk/GetirBuyukSlider'
import GetirBuyukCategories from '../GetirBuyuk/GetirBuyukCategories'
import OfferTop from '../CommonComponents/OfferTop'
import OfferBottom from '../CommonComponents/OfferBottom'
import GetirBuyukCards from '../GetirBuyuk/GetirBuyukCards'
import Fotter from '../CommonComponents/Fotter'
import FotterSub  from '../CommonComponents/FotterSub'
import GetirBuyukOfferTop from '../GetirBuyuk/GetirBuyukOfferTop'
import GetirBuyukOfferBottom from "../../assets/images/GetirBuyukImages/getirbuyukofferbottom.png"

export default function GETIRBUYUKDASHBOARD() {
  return (
    <div>
      <Navbar/>
      <GetirBuyukSlider/>
      <GetirBuyukCategories/>
      <div className='getirbuyuk_section'>
     
      {/* <GetirBuyukCategories/> */}
      {/* <GetirBuyukOfferTop/> */}
      <OfferTop/>
      <OfferBottom
       title='Market ihtiyaçlarınızı kapınıza kadar getirelim.'
       image={GetirBuyukOfferBottom}/>
      <GetirBuyukCards/>
      <Fotter/>
      <FotterSub/>
      </div>
    </div>
  )
}
