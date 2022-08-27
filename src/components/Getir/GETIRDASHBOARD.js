import React,{useState} from 'react'
import Navbar from '../CommonComponents/Navbar'
import GetirSlider from '../Getir/GetirSlider'
import GetirCategories from '../Getir/GetirCategories'
import OfferTop from '../CommonComponents/OfferTop'
import OfferBottom from '../CommonComponents/OfferBottom'
import GetirCards from '../Getir/GetirCards'
import Fotter from '../CommonComponents/Fotter'
import FotterSub from '../CommonComponents/FotterSub'
import GetirOfferBottom from "../../assets/images/GetirImages/getirofferbottom.png"
import LocationModal from '../CommonComponents/LocationModal'



export default function GETIRDASHBOARD() {
  
  const [showModal,setShowModal]=useState(false);

  // const [showModal1,setRhowModal1]=useState(false);

  

  const openModal = ()=>{
    setShowModal(prev=>!prev)
  }



  return (
    <div>

        <Navbar/>
        <GetirSlider/>
        <GetirCategories/>
       <div className='getir_section'>
        <OfferTop/>
       <OfferBottom
         title='İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.'
         image={GetirOfferBottom}/>
        <GetirCards/>
        <Fotter/>
        <FotterSub/>
       </div> 
       {/* <LocationModal/>
       {/* <WorkShow/> */}
       

    </div>
  )
}
