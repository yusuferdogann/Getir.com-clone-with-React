import React from 'react'
import '../../assets/css/Cards.css'
import D1 from '../../assets/images/GetirSud1.png'
import D2 from '../../assets/images/GetirSud2.png'
import D3 from '../../assets/images/GetirSud3.png'
import CardItem from '../CommonComponents/CardItem'

export default function Cards() {
  return (
   <div className='d-flex'>
    <CardItem
    image={D1}
    title='Damacana değişim ücreti yok'
    subtitle='Siparişlerinizde elinizde Kuzeyden ya da başka bir marka damacana bulunması durumunda damacana değişimi ücretsizdir.'
    />
  <CardItem
   image={D2}
   title='7 gün 08.00-24.00 arası hizmet'
    subtitle="GetirSu hafta içi hafta sonu demeden gece 24.00'e kadar suyunuzu kapınıza getirir."
   />
    <CardItem
   image={D3}
   title='Teslimat ücreti yok'
    subtitle='GetirSu’da siparişiniz için teslimat ücreti ödemezsiniz.'
   />
 
   </div>
  )
}
