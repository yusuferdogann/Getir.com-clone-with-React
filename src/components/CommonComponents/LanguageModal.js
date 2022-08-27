import React from 'react'

export default function LanguageModal() {
  return (
    <div>




<div className="modal fade language_modal" id="exampleModal13"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" style={{width:'30%'}}>
    <div className="modal-content">

      <div className="d-flex my-3">
        <h5 className="mx-auto" id="exampleModalLabel">Dil Degistir</h5>
        <button type="button" className="me-3 btn-close close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        
      <div className='d-flex justify-content-between border border-1 p-2 align-items-center rounded-3'>
     <div className='d-flex align-items-center'>
        <input className='form-check-input' type='radio'></input>
        <p className='mx-2 align-self-center my-auto'>Turkce</p>
        </div>
       <div> <img src='https://flagcdn.com/w20//tr.jpg'/></div>
     </div>

     <div className='d-flex justify-content-between border border-1 p-2 align-items-center rounded-3'>
     <div className='d-flex align-items-center'>
        <input className='form-check-input' type='radio'></input>
        <p className='mx-2 align-self-center my-auto'>English</p>
        </div>
       <div> <img src='https://flagcdn.com/w20//us.jpg'/></div>
     </div>

      </div>
      <div className="my-3 container">
        <div className='d-grid'><button className='btn btn-primary'>Guncelle</button></div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
