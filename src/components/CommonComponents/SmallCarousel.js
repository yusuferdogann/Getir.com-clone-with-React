import React from 'react';
// import ReactDOM from 'react-dom';
import '../../assets/css/Carousel.css'
import F1 from '../../assets/images/food1.jpeg'
import F2 from '../../assets/images/food2.jpeg'
import F3 from '../../assets/images/food3.jpeg'
import F4 from '../../assets/images/food4.jpeg'
import F5 from '../../assets/images/food5.jpeg'
import F6 from '../../assets/images/food6.jpeg'
import F7 from '../../assets/images/food7.jpeg'
import F8 from '../../assets/images/food8.jpeg'
import F9 from '../../assets/images/food9.jpeg'
import F10 from '../../assets/images/food10.jpeg'
import F11 from '../../assets/images/food11.jpeg'
import F12 from '../../assets/images/food12.jpeg'


import InfiniteCarousel from 'react-leaf-carousel';


export default function Carousel() {
  return (
    
    <div className='small_carausel'>
       <h6 className='my-4 fw-bold'>Mutfaklar</h6>
        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}

    // dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={3}
    slidesToShow={8}
    scrollOnDevice={true}
    // autoCycle={true}
    cycleInterval={4000}
    slidesSpacing={10}
    // animationDuration={4000}
  >
    
    <div className='' style={{backgroundColor:'white',borderRadius:'10px'}}>
     
      <img
        alt=""
        src={F1}
        style={{width:'100px',width:'100px'}}
        className='d-block justify-content-end'
      />
      <hr style={{padding:'0px',margin:'0px'}}/>
      <span  className='d-flex justify-content-center my-3 pb-2 fw-bold' >Börek</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F2}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Deniz Ürünleri</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F3}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Burger</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F4}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Döner</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F5}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Dünya Mutfağı</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F6}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Ev Yemekleri</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F7}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Kahvaltı</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F8}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Kebap</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F9}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Köfte</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F10}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Lahmacun</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F11}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Mantı</span>
    </div>
    <div  style={{backgroundColor:'white',borderRadius:'10px'}}>
      <img
        alt=""
        src={F12}
        style={{width:'100px'}}
      />
       <hr style={{padding:'0px',margin:'0px'}}/>
      <span className='d-block my-2 text-center my-3 pb-2 fw-bold' >Pastı & Tatlı</span>
    </div>
   
  </InfiniteCarousel>
    </div>
  )
}
