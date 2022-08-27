import React from 'react'
import '../../assets/css/FotterSub.css'

export default function FotterSub() {
  return (
    <div className='d-flex fottersub justify-content-between py-5'>
        <div className='d-flex align-self-center'>
        <p className='my-auto'>© 2022 Getir</p>
        <ul className='my-auto'><li>Bilgi Toplu Hizmetleri</li></ul>
        </div>

        <div className='d-flex align-items-center'>
            <span><i class="fa-brands fa-facebook mx-2"></i></span>
            <span><i class="fa-brands fa-twitter mx-2"></i></span>
            <span><i class="fa-brands fa-instagram mx-2"></i></span>

            <label className='d-flex align-items-center fottersub_language'>
            <i class="fa-solid fa-globe mx-2"></i>
            <span>Turkce(TR)</span>
            </label>

        </div>
    </div>
  )
}
