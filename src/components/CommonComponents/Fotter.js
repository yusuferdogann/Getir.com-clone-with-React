import React from 'react'
import '../../assets/css/Fotter.css'
import '../../assets/css/FotterSub.css'
import R1 from '../../assets/images/r1.png'
import R2 from '../../assets/images/r2.png'
import R3 from '../../assets/images/r3.png'
import R4 from '../../assets/images/r4.png'

export default function Fotter() {
  return (
    <div className='fotter'>
        
        <div className='row  d-flex mx-auto'>
            <div className='col fotter_area pt-5 py-5 redirect'>
                <p>Getiri indirin</p>
                <span><img className='d-block' style={{width:'150px'}} src={R1}/></span>
                <span><img className='d-block my-2' style={{width:'150px'}} src={R2}/></span>
                <span><img className='d-block my-2' style={{width:'150px'}} src={R3}/></span>
              
            </div>
            <div className='col fotter_area pt-5'>
                <p>Getir'i keşfedin</p>
                <ul>
                    <li>Hakkımızda</li>
                    <li>Kariyer</li>
                    <li>Teknoloji Kariyerleri</li>
                    <li>İletisim</li>
                    <li>Sosyal Sorumluluk Projeleri</li>
                </ul>
               
            </div>
            <div className='col fotter_area pt-5'>
                <p>Yardıma mı ihtiyacınız var?</p>
                <ul>
                    <li>Sıkça Sorulan Sorular</li>
                    <li>Kişisel Verilerin Korunması</li>
                    <li>Gizililik Politikası</li>
                    <li>Kullanım Koşulları</li>
                    <li>Çerez Politikası</li>
                </ul>
            </div>
            <div className='col fotter_area pt-5'>
                <p>Iş Ortağımız Olun</p>
                <ul>
                    <li>Bayimiz Olun</li>
                    <li>Deponuzu Kiralayın</li>
                    <li>GetirYemek Restoranı Olun</li>
                    <li>GetirÇarsı İşletmesi Olun</li>
                    <li>Zincir Restoranlar</li>
                </ul>
            </div>
            <div className='col-1 fotter_area qr_code'>
                <img src={R4} className='d-flex ms-0 float-end' style={{padding:'0px',margin:'0px'}}/>
            </div>
        <hr style={{padding:'0px',margin:'0px'}}/>
      
        </div>
    
    </div>
  )
}
