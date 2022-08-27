import React from 'react'
import '../../assets/css/Cards.css'
import D1 from '../../assets/images/GetirYemekImages/getiryemekcard1.png'
import D2 from '../../assets/images/GetirYemekImages/getiryemekcard2.png'
import D3 from '../../assets/images/GetirYemekImages/getiryemekcard3.svg'
import CardItem from '../CommonComponents/CardItem'

export default function Cards() {
  return (
   <div className='d-flex'>
    <CardItem
    image={D1}
    title='Binlerce restorandan yemeğinizi görerek seçin!'
    />
  <CardItem
   image={D2}
   title='Haftanın her günü bulabileceğiniz yüzlerce kampanya ile indirimli fiyatlardan yararlanın!'
    
   />
    <CardItem
   image={D3}
   title='Kredi kartı, kapıda ya da yemek kartları ile hızlı ve güvenli ödeme yapın!'
    
   />
 
   </div>
  )
}
