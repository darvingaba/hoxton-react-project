import { useEffect, useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HotelList } from './pages/HotelList';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';

type Hotel = {
  city: string;
  country: string;
  date_end: string;
  date_start: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  stars: number;
};
function App() {
  let [hotels, setHotels] = useState([]);
   useEffect(()=>{
    fetch("http://localhost:3001/hotels")
    .then(response=>response.json())
    .then(response=>setHotels(response))
   },[]);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route index element={<Navigate to='/landingpage'/>}/>
          <Route path='landingpage' element={<LandingPage/>}/>
          <Route path='hotelList' element={<HotelList hotels={hotels}/>}/>
          <Route path='login' element={<LoginPage/>}/>

     
       </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App


