import React from 'react'
import '../../assets/css/Cards.css'
import D1 from '../../assets/images/GetirCarsiImages/getircarsicard1.png'
import D2 from '../../assets/images/GetirCarsiImages/getircarsicard2.png'
import D3 from '../../assets/images/GetirCarsiImages/getircarsicard3.png'
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
   title='Her şiparişinize bir kampanya'
    subtitle='Getirde vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz'
   />
    <CardItem
   image={D3}
   title='Her şiparişinize bir kampanya'
    subtitle='Getirde vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz'
   />
 
   </div>
  )
}
