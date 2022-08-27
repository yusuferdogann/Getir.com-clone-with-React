import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import Data from "./Data";
import '../../assets/css/Slider.css'
import Logo1 from '../../assets/images/logo3434.svg'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function App(props) {
  const [people, setPeople] = useState(Data);
  const [index, setIndex] = useState(0);
// console.log(index)
// console.log(setIndex)


  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }

  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index=>index + 1);
    }, 3500);
    return () => clearInterval(slider);
  }, [index]);

  const handleInputBlur = event => {
    console.log('Input lost focus'); 
    console.log(event)
    document.querySelector('.mainphoneinput').classList.add('is-invalid')
  };

  return (
    <section className="section">
      <div className="title">
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
              <img src={image} alt={name} className="person-img" />
              {/* <h4>{name}</h4> */}
              {/* <p className="title">{title}</p> */}
              {/* <p className="text">{quote}</p> */}
              {/* <FaQuoteRight className="icon" /> */}
            </article>
          );
        })}
     <div className="">
     <div className="slider_content d-flex align-items-center">
        <div className="d-flex justify-content-between align-items-center slider_content_responsive mx-auto" style={{width:'100%',backgroundColor:""}}>
        
        <div className="logo">
            <img src={Logo1}/>
          <h1 className="mt-5 col-11">Dakikalar icinde kapinizda</h1>
        </div>  

        <div className="phone_area p-3 align-items-center">
            <div className="d-flex mx-auto my-2 maintext"> <p className="mx-auto" >Giris yap veya kayit ol</p></div>
            <div className="d-flex justify-content-between" >
            <div className="col-3"> 
              <PhoneInput
                country={'tr'}
                placeholder='Telefon Numarasi'
                value=''
                className='me-5 getircarsi_phoneinput'
                
              />

              </div>
              <div class="form-floating col-8 ms-4 mb-3">
            <input onBlur={handleInputBlur} type="email" class="form-control mainphoneinput" id="floatingInput" placeholder="name@example.com"/>
            <label class='text-muted' htmlfor="floatingInput">Telefon Numarası</label>
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
        
        {/* <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>

        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button> */}

      </div>
    </section>
  );
}

export default App;
