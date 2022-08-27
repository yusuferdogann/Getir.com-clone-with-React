import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Data from "./GetirYemekData";
import '../../assets/css/Slider.css'
import Logo1 from '../../assets/images/logo3434.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import LocationModal from "../CommonComponents/LocationModal";
function App() {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
  const [showModal,setShowModal]=useState(false);
// console.log(index)
// console.log(setIndex)

const handleInputBlur = event => {
  console.log('Input lost focus'); 
  console.log(event)
  document.querySelector('.getiryemekinput').classList.add('is-invalid')
};
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index=>index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  const openModal = ()=>{
    setShowModal(prev=>!prev)
  }
  return (
    <section className="section" >
      <div className="title">
        {/* <h2>
          <span>/</span>reviews
        </h2> */}
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <video autoplay={"autoplay"} preload="auto" muted loop style={{height:'31rem',width:'100%',objectFit:'cover'}} src={image} alt={name}></video>
              {/* <h4>{name}</h4> */}
              {/* <p className="title">{title}</p> */}
              {/* <p className="text">{quote}</p> */}
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
      <div className="mx-auto d-flex justify-content-center">
      <div className="d-flex slider_content_colorless slider_content_responsive  align-items-center" style={{backgroundColor:''}}>
           
            <div className="getircarsi_phone_area p-3" >
            <h6 className="text-center my-2 maintext">Adresine getiren restoranları gör</h6>
                        
            <div onClick={openModal} className="d-flex justify-content-around" style={{border:'1px solid #d9d7e1',borderRadius:'8px'}}>
            <LocationModal/>
            <div className="d-flex mt-3">
            <i class="mt-2 fa-solid fa-magnifying-glass getircarsi_search"></i>
            <p className="p-1 ms-2 text-muted">Örn.Etiler mh.</p>
            </div>

            <div className="d-flex my-auto getircarsi_find_location">
            <svg style={{width:'16px'}} data-testid="icon" name="crosshair" fill="white" size="16" color="white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 gcTOvW"><path d="M32 16c0-8.747-7.040-16-16-16v0 0 0c-8.747 0-16 7.253-16 16s7.040 16 16 16c0 0 0 0 0 0s0 0 0 0c8.747 0 16-7.253 16-16zM17.707 28.373v-3.84c0-0.853-0.853-1.707-1.707-1.707s-1.707 0.853-1.707 1.707v3.84c-5.547-0.853-10.027-5.12-10.667-10.667h3.84c0.853 0 1.707-0.853 1.707-1.707s-0.853-1.707-1.707-1.707h-3.84c0.853-5.547 5.12-10.027 10.667-10.667v3.84c0 0.853 0.853 1.707 1.707 1.707s1.707-0.853 1.707-1.707v-3.84c5.547 0.853 10.027 5.12 10.667 10.667h-3.84c-0.853 0-1.707 0.853-1.707 1.707s0.853 1.707 1.707 1.707h3.84c-0.64 5.547-5.12 10.027-10.667 10.667z" class="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path></svg>
            <p className="my-auto ms-2">Konumumu bul</p>
            </div>


            </div>

            <p className="text-center my-3 text-muted">veya</p>

            <h6 className="text-center maintext my-3">Giris yap veya kayit ol</h6>
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
                <input onBlur={handleInputBlur} type="email" class="form-control getiryemekinput" id="floatingInput" placeholder="name@example.com"/>
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

export default App;
