import React from 'react'
import '../../assets/css/Categories.css'
import CategoriesCard from '../CommonComponents/CategoriesCard'

import CO from '../../assets/images/GetirBuyukImages/getirbuyukc1.jpeg'
import C1 from '../../assets/images/getirc1.jpeg'
import C2 from '../../assets/images/getirc2.jpeg'
import C3 from '../../assets/images/getirc3.jpeg'
import C4 from '../../assets/images/getirc4.jpeg'
import C5 from '../../assets/images/getirc5.jpeg'
import C6 from '../../assets/images/getirc6.jpeg'
import C7 from '../../assets/images/getirc7.jpeg'
import C8 from '../../assets/images/getirc8.jpeg'
import C9 from '../../assets/images/getirc9.jpeg'
import C10 from '../../assets/images/getirc10.jpeg'
import C11 from '../../assets/images/getirc11.jpeg'
import C12 from '../../assets/images/getirc12.jpeg'
import C13 from '../../assets/images/getirc13.jpeg'
import C14 from '../../assets/images/getirc14.jpeg'
import C15 from '../../assets/images/getirc15.jpeg'
import C16 from '../../assets/images/getirc16.jpeg'
import C17 from '../../assets/images/getirc17.jpeg'
import C18 from '../../assets/images/GetirBuyukImages/getirbuyukc19.jpeg'

export default function Categories() {
  return (
    
    <div className='mb-5 getirbuyuk_categories'>
         <h6 className='getirbuyuk_section py-4' style={{background:'white'}}>Kategoriler</h6>
      <div className='grid-container'>
       
      <CategoriesCard
       image={CO}
       name='Et,Tavuk & Balık'
       
       />
       <CategoriesCard
       image={C1}
       name='Su & İçecek'
       
       />
       <CategoriesCard
       image={C2}
       name='Meyve & Sebze'
       
       />
        <CategoriesCard
       image={C3}
       name='Fırından'
    
       />
          <CategoriesCard
       image={C4}
       name='Temel Gıda'
      
       />
          <CategoriesCard
       image={C5}
       name='Atıştırmalık'
       />
          <CategoriesCard
       image={C6}
       name='Dondurma'
       />
          <CategoriesCard
       image={C7}
       name='Süt Ürünleri'
       />
          <CategoriesCard
       image={C8}
       name='Kahvaltılık'
       />
           <CategoriesCard
       image={C9}
       name='Yiyecek'
       />
           <CategoriesCard
       image={C10}
       name='Fit & Form'
       />
           <CategoriesCard
       image={C11}
       name='Kişisel Bakım'
       />
           <CategoriesCard
       image={C12}
       name='Ev Bakım'
       />
           <CategoriesCard
       image={C13}
       name='Ev & Yaşam'
       />
           <CategoriesCard
       image={C14}
       name='Teknoloji'
       />
           <CategoriesCard
       image={C15}
       name='Evcil Hayvan'
       />
           <CategoriesCard
       image={C16}
       name='Bebek'
       />
           <CategoriesCard
       image={C17}
       name='Cinsel Sağlık'
       />
           <CategoriesCard
       image={C18}
       name='Giyim'
       />
   

      </div>
   </div>
    
  )
}
