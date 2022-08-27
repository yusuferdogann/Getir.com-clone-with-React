import React from 'react'
import '../../assets/css/Categories.css'
import CategoriesCard from '../CommonComponents/CategoriesCard'
import C1 from '../../assets/images/GetirCarsiImages/getircarsic1.jpeg'
import C2 from '../../assets/images/GetirCarsiImages/getircarsic2.jpeg'
import C3 from '../../assets/images/GetirCarsiImages/getircarsic3.jpeg'
import C4 from '../../assets/images/GetirCarsiImages/getircarsic4.jpeg'
import C5 from '../../assets/images/GetirCarsiImages/getircarsic5.jpeg'
import C6 from '../../assets/images/GetirCarsiImages/getircarsic6.jpeg'
import C7 from '../../assets/images/GetirCarsiImages/getircarsic7.jpeg'
import C8 from '../../assets/images/GetirCarsiImages/getircarsic8.jpeg'
import C9 from '../../assets/images/GetirCarsiImages/getircarsic9.jpeg'
import C10 from '../../assets/images/GetirCarsiImages/getircarsic10.jpeg'
import C11 from '../../assets/images/GetirCarsiImages/getircarsic11.jpeg'
import C12 from '../../assets/images/GetirCarsiImages/getircarsic12.jpeg'
import C13 from '../../assets/images/GetirCarsiImages/getircarsic13.jpeg'
import C14 from '../../assets/images/GetirCarsiImages/getircarsic14.jpeg'
import C15 from '../../assets/images/GetirCarsiImages/getircarsic15.png'

export default function Categories() {
  return (
    
    <div class="mb-5 getircarsi_categories">
      <h6 className='getircarsi_section py-4 mt-5' style={{background:'white'}}>İşletme Kategorileri</h6>
      <div className='grid-container'>
       
    
       <CategoriesCard
       image={C1}
       name='Hobi & Oyun'
       
       />
       <CategoriesCard
       image={C2}
       name='Çiçekçi'
       
       />
        <CategoriesCard
       image={C3}
       name='Market'
    
       />
          <CategoriesCard
       image={C4}
       name='Şarküteri'
      
       />
          <CategoriesCard
       image={C5}
       name='Kasap'
       />
          <CategoriesCard
       image={C6}
       name='Manav'
       />
          <CategoriesCard
       image={C7}
       name='Kuru yemişçi'
       />
          <CategoriesCard
       image={C8}
       name='Aktar'
       />
           <CategoriesCard
       image={C9}
       name='Turşucu'
       />
           <CategoriesCard
       image={C10}
       name='Yufkacı'
       />
           <CategoriesCard
       image={C11}
       name='Balıkçı'
       />
           <CategoriesCard
       image={C12}
       name='Pet Shop'
       />
           <CategoriesCard
       image={C13}
       name='Kozmetik'
       />
           <CategoriesCard
       image={C14}
       name='Kırtasiye'
       />
           <CategoriesCard
       image={C15}
       name='Çikolatacı & Şekerlemeci'
       />
    
   

      </div>
   </div>
    
  )
}
