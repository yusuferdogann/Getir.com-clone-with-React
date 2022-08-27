import react from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import GETIRDASHBOARD from './components/Getir/GETIRDASHBOARD'
import GETIRYEMEKDASHBOARD from './components/GetirYemek/GETIRYEMEKDASHBOARD'
import GETIRBUYUKDASHBOARD from './components/GetirBuyuk/GETIRBUYUKDASHBOARD'
import GETIRSUDASHBOARD from './components/GetirSu/GETIRSUDASHBOARD'
import GETIRCARSIDASHBOARD from './components/GetirCarsi/GETIRCARSIDASHBOARD'


function App() {
  return (
  <Router>
    <Routes>
    <Route path='/' element={<GETIRDASHBOARD/>}/>
    <Route path='/yemek/' element={<GETIRYEMEKDASHBOARD/>}/>
    <Route path='/buyuk/' element={<GETIRBUYUKDASHBOARD/>}/>
    <Route path='/su/' element={<GETIRSUDASHBOARD/>}/>
    <Route path='/carsi/' element={<GETIRCARSIDASHBOARD/>}/>
    </Routes>
     
     
  </Router>
  );
}

export default App;
