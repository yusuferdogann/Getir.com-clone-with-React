import React from 'react'
import '../../App.css'
import Navbar from '../CommonComponents/Navbar'
import GetirYemekSlider from './GetirYemekSlider'
import SmallCarausel from '../CommonComponents/SmallCarousel'
import GetirYemekCards from '../GetirYemek/GetirYemekCards'
import ApplyNow from '../CommonComponents/ApplyNow'
import Fotter from '../CommonComponents/Fotter'
import FotterSub from '../CommonComponents/FotterSub'

export default function GETIRYEMEKDASHBOARD() {
  return (
    <div>
      <Navbar/>
      <GetirYemekSlider/>
      <div className='getiryemek_section'>
      <SmallCarausel/>
      <GetirYemekCards/>
      <ApplyNow/>
      <Fotter/>
      <FotterSub/>
      </div>
    </div>
  )
}
