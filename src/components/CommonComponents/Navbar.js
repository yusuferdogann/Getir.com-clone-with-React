import {useEffect,useState} from 'react';
import '../../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
import RegisterModal from './RegisterModal';
import SignInModal from './SignInModal';
import LanguageModal from './LanguageModal';

const App = () => {

   
  const [showModal,setShowModal]=useState(false);



  

  const openModal = ()=>{
    setShowModal(prev=>!prev)
  }



  const handleClick = ()=>{
    const allWithClass = Array.from(
      document.getElementsByClassName('link')
    );
    allWithClass.forEach(element => {
      element.addEventListener('click',()=>{
        element.firstElementChild.classList.add('getircolor')
      
        element.style.background = '#5d3ebc'
        
      })
    });
  }



  return (
   
    <div  className='Navbar'>
          
     
       <div  className='Navbar_content d-flex justify-content-between'>

       <div className='Navbar_left_content'>
          <ul className='d-flex'>
            <Link onClick={handleClick} className='link my-2' to='/'><span className='add_color'>getir</span></Link>
            <Link onClick={handleClick} className='link mx-3 my-2' to='/yemek/'>getir<span className='add_color'>yemek</span></Link>
            <Link onClick={handleClick} className='link mx-3 my-2' to='/buyuk/'>getir<span className='add_color'>büyük</span></Link>
            <Link onClick={handleClick} className='link mx-3 my-2' to='/su/'>getir<span className='add_color'>su</span></Link>
            <Link onClick={handleClick} className='link mx-3 my-2' to='/carsi/'>getir<span className='add_color'>çarşı</span></Link>
          </ul>
        </div>
        
        <div className='Navbar_right_content'>
          <ul className='d-flex'>
            <li ><i type='button' data-bs-toggle="modal" data-bs-target="#exampleModal13" className="fa-solid fa-globe mx-2" onClick={openModal}></i><span>Turkce(TR)</span></li>
            <LanguageModal showModal={showModal} setShowModal={setShowModal}/> 
            <li><i type="button" onClick={openModal} data-bs-toggle="modal" data-bs-target="#exampleModal12" className="fa-solid fa-user mx-2"></i><span>Giris Yap</span></li>
            <SignInModal showModal={showModal} setShowModal={setShowModal}/>
            <li>
              <i type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={openModal} className="fa-solid fa-user-plus mx-2"></i>
              <span>Kayit Ol</span>
            </li>
            <RegisterModal showModal={showModal} setShowModal={setShowModal}/>
          </ul>
        </div>
       </div>      
    </div>
 




  );
};
export default App;