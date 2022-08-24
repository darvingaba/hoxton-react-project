import { useEffect, useState } from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
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
}
function App() {
  let [hotels, setHotels] = useState([]);
  let [serverUser, setServerUser] = useState<User>({} as User);
  let [input, setInput] = useState({ email: "", password: "" });
   useEffect(()=>{
    fetch("http://localhost:3001/hotels")
    .then(response=>response.json())
    .then(response=>setHotels(response))
   },[]);
   useEffect(() => {
     fetch("http://localhost:3001/user")
       .then((response) => response.json())
       .then((response) => setServerUser(response));
   }, []);

  return (
    <div className="App">
      <Header serverUser={serverUser}/>
      <main>
        <Routes>
          <Route index element={<Navigate to='/landingpage'/>}/>
          <Route path='landingpage' element={<LandingPage/>}/>
          <Route path='hotelList' element={<HotelList hotels={hotels}/>}/>
          <Route path='login' element={<LoginPage
           serverUser={serverUser}
           setServerUser={setServerUser}
           input={input}
           setInput={setInput}
          />}/>
          <Route  path='signup' element={<SignUp/>}/>
          <Route path='hotelsList/:id' element={<SingleHotel/>}/>

     
       </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App


