import React from "react";
import '../../assets/css/Slider.css'
import Logo1 from '../../assets/images/GetirSuImages/getirsumain1.png'
import Image from '../../assets/images/GetirSuSlider.jpeg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function App() {
  const handleInputBlur = event => {
    console.log('Input lost focus'); 
    console.log(event)
    document.querySelector('.getirsuinput').classList.add('is-invalid')
  };

  
  return (
    <section className="section">
     
      <div className="section-center">
        <img className="getirsu_image" style={{width:'100%',position:"absolute"}} src={Image}/>
        <div className="">
     <div className="slider_content d-flex align-items-center">
        <div className="d-flex justify-content-between slider_content_responsive mx-auto" style={{width:'100%'}}>
        <div className="logo">
            <img style={{width:'auto',height:"80px"}} src={Logo1}/>
          <h2 className="my-4 col-8">Gece gündüz kapınıza gelen su</h2>
          </div>  

          <div className="phone_area p-3">
         <div className="d-flex mx-auto my-2 phone_header"> <p className="mx-auto maintext" >Giris yap veya kayit ol</p></div>

         <div className="d-flex justify-content-between" >
         <div className="col-3"> 

              <PhoneInput
                country={'tr'}
                placeholder='Telefon Numarasi'
                value=''
                className='me-2 getircarsi_phoneinput'

              />

            </div>
          <div class="form-floating col-8 mb-3">
          <input type="email" onBlur={handleInputBlur} class="form-control getirsuinput" id="floatingInput" placeholder="name@example.com"/>
          <label htmlfor="floatingInput" className="text-muted">Telefon Numarasi</label>
          <div id="validationServer03Feedback" className="invalid-feedback">
              Lütfen telefon numaranızı giriniz.
            </div>
        </div>
         </div>
         <div className="d-grid">
          <button className="btn btn-primary my-2 mainbutton">Telefon numarasi ile devam et</button>
         </div>

          </div>
        </div>

        </div>
     </div>
    
      </div>
    </section>
  );
}

