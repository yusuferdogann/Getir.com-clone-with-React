import React,{useState} from "react";
import '../../assets/css/Slider.css'
import Logo1 from '../../assets/images/logo3434.svg'
import Image from '../../assets/images/GetirCarsiImages/getircarsis1.jpeg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LocationModal from "../CommonComponents/LocationModal";

export default function App() {

  const [showModal,setShowModal]=useState(false);

  const openModal = ()=>{
    setShowModal(prev=>!prev)
  }

  const handleInputBlur = event => {
    console.log('Input lost focus'); 
    console.log(event)
    document.querySelector('.getircarsiinput').classList.add('is-invalid')
  };
  
  return (
    <section className="section getircarsi">
     
      <div className="section-center">
        <img className='getircarsi_image' style={{width:'100%'}} src={Image}/>
        <div className="d-flex mx-auto justify-content-center">
        <div className="getircarsi_slider_content d-flex align-items-center  slider_content_responsive mx-auto" style={{backgroundColor:''}}>
         
         <div className="getircarsi_phone_area p-3" >

           
           <div onClick={openModal} className="d-flex justify-content-around" style={{border:'1px solid #d9d7e1',borderRadius:'8px',background:''}}>
           <LocationModal/>
           <div  className="d-flex mt-3">
           <i class="mt-2 fa-solid fa-magnifying-glass maincolor"></i>
           <p className="p-1 ms-2 text-muted">Orn.Etiler mh.</p>
           </div>

           <div className="d-flex my-auto getircarsi_find_location">
           <svg style={{width:'16px'}} data-testid="icon" name="crosshair" fill="white" size="16" color="white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 gcTOvW"><path d="M32 16c0-8.747-7.040-16-16-16v0 0 0c-8.747 0-16 7.253-16 16s7.040 16 16 16c0 0 0 0 0 0s0 0 0 0c8.747 0 16-7.253 16-16zM17.707 28.373v-3.84c0-0.853-0.853-1.707-1.707-1.707s-1.707 0.853-1.707 1.707v3.84c-5.547-0.853-10.027-5.12-10.667-10.667h3.84c0.853 0 1.707-0.853 1.707-1.707s-0.853-1.707-1.707-1.707h-3.84c0.853-5.547 5.12-10.027 10.667-10.667v3.84c0 0.853 0.853 1.707 1.707 1.707s1.707-0.853 1.707-1.707v-3.84c5.547 0.853 10.027 5.12 10.667 10.667h-3.84c-0.853 0-1.707 0.853-1.707 1.707s0.853 1.707 1.707 1.707h3.84c-0.64 5.547-5.12 10.027-10.667 10.667z" class="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path></svg>
           <p className="my-auto ms-2">Konumumu bul</p>
           </div>

           
           </div>
   
           <p className="text-center my-3">veya</p>

           <h6 className="text-center maincolor my-3">Giris yap veya kayit ol</h6>
           <div className="d-flex">
             <div className="col-3"> 

              <PhoneInput
               country={'tr'}
               placeholder='Telefon Numarasi'
               value=''
               className='me-2 getircarsi_phoneinput'
              
             />

         </div>
             <div class="form-floating col-9 px-2 mx-2 mb-3">
               <input type="email" onBlur={handleInputBlur} class="form-control getircarsiinput" id="floatingInput" placeholder="name@example.com"/>
               <label className="text-muted" htmlfor="floatingInput">Telefon Numarasi</label>
               <div id="validationServer03Feedback" className="invalid-feedback">
              Lütfen telefon numaranızı giriniz.
            </div>
             </div>
           </div>
           <div className="d-grid ">
             <button className="mainbutton btn btn-primary">Telefon numarasi ile devam et</button>
           </div>
         </div>
       </div>
        </div>
      </div>
    </section>
  );
}

