import React from 'react'
import '../../assets/css/Modals.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function SignInModal() {
  return (
    <div>
        <div className="modal fade signIn_modal" id="exampleModal12" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content container-fluid" style={{width:'80%'}}>

      <div className="d-flex mt-4 justify-content-between">
        <h5 style={{backgroundColor:''}} className="maintext mx-auto" id="exampleModalLabel">Giris Yap veya kayit ol</h5>
        <button type="button" className="btn-close me-3 close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>


      <div className="modal-body">
      <div className='row'>
          <div className='d-flex'>
              <div className='col-3'> 
               <PhoneInput
          country={'tr'}
          placeholder='Telefon Numarasi'
          value=''
          className='me-2'
          /></div>
              <div className='col-8 mx-4'><div className="form-floating mb-3">
  <input type="email" className="form-control maininput" id="floatingInput" placeholder="name@example.com"/>
  <label htmlfor="floatingInput" className='text-muted'>Telefon Numarası</label>
</div></div>
          </div>
          <div className='d-grid my-2'><button className='btn btn-primary'>Telefon numarasi ile devam et</button></div>
          <p className='text-muted description'>Kisisel verilerinize dair Aydinlatma metni icin <a href='/'>tiklayiniz</a></p>
      </div>
      </div>

      <div className="modal-footer">
        <p className='mx-auto text-muted'>Hala kayit olmadiniz mi? <a href='/'>Kayit Ol</a></p>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}
