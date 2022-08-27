import React from 'react'
import '../../assets/css/Modals.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function RegisterModal() {
  return (
    <div>
        <div className="modal fade register_modal" tabIndex='1' id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">

        <div className='d-flex mt-4'>
        <h5 className='mx-auto'>Kayit Ol</h5>
        <button  type="button" className="btn-close me-4 close" data-bs-dismiss="modal" aria-label="Close"></button>

        </div>

      <div className="modal-body">
        <div className='container'>
         
         <div className='row description'>
            <div className='col-3'>  
          <PhoneInput
            country={'tr'}
            placeholder='Telefon Numarasi'
            value=''
            className=''
          /></div>
            <div className='col-9'>
            <div className="form-floating mb-3 ms-4">
            <input type="email" className="form-control maininput" id="floatingInput" placeholder="name@example.com"/>
            <label htmlfor="floatingInput">Telefon Numarasi</label>
</div>

            </div>
            <div>
            <div className="form-floating mb-3">
            <input type="email" className="form-control maininput" id="floatingInput" placeholder="name@example.com"/>
            <label htmlfor="floatingInput">Ad Soyad</label>
            </div>

            </div>
            <div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control maininput" id="floatingInput" placeholder="name@example.com"/>
              <label htmlfor="floatingInput">E-Posta</label>
            </div>

            </div>
            <div className='d-flex'><input className='form-check-input me-2'></input>
            <p className='text-muted'>Getir bana ozel kampanya,tanitim ve firsatlardan haberdar olmak istiyorum</p>
            </div>
            <div><p className='text-muted description2'> Kisisel verilerinize dair Aydinlatma Metni icin <a href='/'>tiklayiniz</a> Uye olmakla, <a href='/'>Kullanim Kosullari</a>hukumlerini kabul etmekteyiz.</p></div>
            <div className='d-grid gap-2'> <button className='btn btn-primary'>Kayit Ol</button></div>
         </div>
          

        </div>
      </div>

      <div className="modal-footer">
        <div className='mx-auto text-muted'><p>Getir`e uyeseniz <a href='/'>Giris Yap</a></p></div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
