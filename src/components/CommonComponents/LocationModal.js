import React from 'react'
import maps from '../../assets/images/CommonImages/maps.png'

export default function LocationModal() {
  return (
  <div className='position-absolute ' >
      <div className=''>
  
  <button style={{width:"23rem",height:"4rem",opacity:"0"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal14">
    Launch demo modal
  </button>
  
  <div class="modal fade location_modal" id="exampleModal14" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content container-fluid" style={{width:'auto'}}>
  
  
        <div class="d-flex align-items-center ms-5 mt-3">
          <h5 class="maintext  mx-auto " id="exampleModalLabel">Teslimat Adresi Ekleyin</h5>
          <button type="button" class="btn-close mx-3" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  
  
        <div class="modal-body">
  
        <div className="d-flex" aria-haspopup='listbox' role='combobox'>
            <input type='text' className='form-control position-absolute my-2 mx-2' style={{backgroundColor:"",height:"50px",width:"90%"}}/>
            <div className="d-flex mt-3 position-absolute justify-content-start ms-5" style={{backgroundColor:'',left:'0px'}}>
            <i class="mt-2 fa-solid fa-magnifying-glass maincolor"></i>
            <p className="p-1 ms-2 text-muted">Örn.Etiler mh.</p>
            </div>
  
            <div className="d-flex my-auto getircarsi_find_location position-absolute justify-content-end me-5 mt-3" style={{backgroundColor:'',right:'0px'}}>
            <svg style={{width:'16px'}} data-testid="icon" name="crosshair" fill="white" size="16" color="white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="style__Icon-sc-__sc-hqksj3-1 gcTOvW"><path d="M32 16c0-8.747-7.040-16-16-16v0 0 0c-8.747 0-16 7.253-16 16s7.040 16 16 16c0 0 0 0 0 0s0 0 0 0c8.747 0 16-7.253 16-16zM17.707 28.373v-3.84c0-0.853-0.853-1.707-1.707-1.707s-1.707 0.853-1.707 1.707v3.84c-5.547-0.853-10.027-5.12-10.667-10.667h3.84c0.853 0 1.707-0.853 1.707-1.707s-0.853-1.707-1.707-1.707h-3.84c0.853-5.547 5.12-10.027 10.667-10.667v3.84c0 0.853 0.853 1.707 1.707 1.707s1.707-0.853 1.707-1.707v-3.84c5.547 0.853 10.027 5.12 10.667 10.667h-3.84c-0.853 0-1.707 0.853-1.707 1.707s0.853 1.707 1.707 1.707h3.84c-0.64 5.547-5.12 10.027-10.667 10.667z" class="style__Path-sc-__sc-hqksj3-2 lcjQMU"></path></svg>
            <p className="my-auto ms-2">Konumumu bul</p>
            </div>
          </div>
  
            <div className='' style={{height:'450px',width:'550px',background:'red',borderRadius:"8px"}}>
              <img style={{width:"550px",height:"450px"}} src={maps}/>
            </div>
  
        </div>
  
  
        <div class="d-grid my-3 container">
          <button type="button" class="fw-bold btn btn-primary locationbutton" >Bu adresi kullan</button>
        
        </div>
  
  
      </div>
    </div>
  </div>
      </div>
  </div>
  )
}
