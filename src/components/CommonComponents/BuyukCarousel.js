import React from 'react';
// import ReactDOM from 'react-dom';
import '../../assets/css/Carousel.css'
import BC1 from '../../assets/images/CommonImages/BigCarousel1.jpeg'
import BC2 from '../../assets/images/CommonImages/BigCarousel2.jpeg'
import BC3 from '../../assets/images/CommonImages/BigCarousel3.jpeg'
import BC4 from '../../assets/images/CommonImages/BigCarousel4.jpeg'



import InfiniteCarousel from 'react-leaf-carousel';


export default function Carousel() {
  return (
    <div className='container'>
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
    sidesOpacity={1}
    sideSize={0.01}
    slidesToScroll={1}
    slidesToShow={3}
    scrollOnDevice={true}
    autoCycle={true}
    cycleInterval={4000}
  >
    <div>
      <img
        alt=""
        src={BC1}
        style={{height:'200px',width:'408px',borderRadius:'10px'}}
        className='d-block justify-content-end'
      />
    </div>
    <div>
      <img
        alt=""
        src={BC2}
        style={{height:'200px',width:'408px',borderRadius:'10px'}}
      />
    </div>
    <div>
      <img
        alt=""
        src={BC3}
        style={{height:'200px',width:'408px' ,borderRadius:'10px'}}
      />
    </div>
    <div>
      <img
        alt=""
        src={BC4}
        style={{height:'200px',width:'408px',borderRadius:'10px'}}
      />
    </div>
    
   
  </InfiniteCarousel>
    </div>
  )
}
