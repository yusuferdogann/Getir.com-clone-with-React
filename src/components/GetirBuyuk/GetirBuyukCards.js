import React from 'react'
import '../../assets/css/Cards.css'
import D1 from '../../assets/images/GetirBuyukImages/GetirBuyukd1.png'
import D2 from '../../assets/images/GetirBuyukImages/GetirBuyukd2.png'
import D3 from '../../assets/images/GetirBuyukImages/GetirBuyukd3.png'
import CardItem from '../CommonComponents/CardItem'

export default function Cards() {
  return (
   <div className='d-flex'>
    <CardItem
    image={D1}
    title='Binlerce Çeşit'
    subtitle='Kasaptan manava ev bakım ürünleriniden kişisel bakım ürünlerine binlerce çeşidi kolayca bulabilirsiniz.'
    />
  <CardItem
   image={D2}
   title='Uygun fiyatlı ürünler'
    subtitle="GetirBüyük'te binlerce ürünü uygun fiyata sipariş verirsiniz."
   />
    <CardItem
   image={D3}
   title='Kapınıza teslimat'
    subtitle='Siparişleriniz kapınıza kadar gelir.'
   />
 
   </div>
  )
}
