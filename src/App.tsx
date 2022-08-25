import { useEffect, useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Appointment } from './pages/Appointment';
import { HotelList } from './pages/HotelList';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignUp } from './pages/SignUp';
import { SingleHotel } from './pages/SingleHotel';

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
type User = {
  name: string;
  email: string;
  password: string;
};

function App() {
  let [hotels, setHotels] = useState([]);
  let [user, setUser] = useState({} as User);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((resp) => resp.json())
      .then((resp) => setUser(resp));
  }, [user]);

   useEffect(()=>{
    fetch("http://localhost:3000/hotels")
      .then((response) => response.json())
      .then((response) => setHotels(response));
   },[]);


  return (
    <div className="App">
      <Header user={user}/>
      <main>
        <Routes>
          <Route index element={<Navigate to='/landingpage'/>}/>
          <Route path='landingpage' element={<LandingPage/>}/>
          <Route path='hotelList' element={<HotelList hotels={hotels}/>}/>
          <Route path='login' element={<LoginPage user={user}/>}/>
          <Route  path='signup' element={<SignUp user={user}/>}/>
          <Route path='hotelsList/:id' element={<SingleHotel/>}/>
          <Route path='appointment/:id' element={<Appointment/>}/>

     
       </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App


