import React from 'react'
import '../../assets/css/Cards.css'
import D1 from '../../assets/images/Getird1.png'
import D2 from '../../assets/images/Getird2.png'
import D3 from '../../assets/images/Getird3.png'
import CardItem from '../CommonComponents/CardItem'

export default function Cards() {
  return (
   <div className='d-flex'>
    <CardItem
    image={D1}
    title='Her şiparişinize bir kampanya'
    subtitle='Getirde vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz'
    />
  <CardItem
   image={D2}
   title='Dakikalar içinde kapınızda'
    subtitle='Getirde siparişiniz dakikalar içinde kapınıza gelir.'
   />
    <CardItem
   image={D3}
   title='Binlerce çeşit mutluluk'
    subtitle='Getirde binlerce çeşit arasından seçiminizi yapabilirsiniz.'
   />
 
   </div>
  )
}
