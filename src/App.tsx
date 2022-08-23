import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LandingPage } from './pages/LandingPage';

type Hotel = {
  city: string;
  country: string;
  date_end: string;
  date_start: string;
  description: string;
  id: string;
  images: string;
  name: string;
  price: number;
  rating: number;
  stars: number;
};
function App() {
  let [hotels, setHotels] = useState([
    {
      city: "Tirana",
      country: "Albania",
      description: "A luxury hotel",
      id: "asas",
      images:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      name: "L Hotel",
      price: 200,
      rating: 4.8,
      stars: 5,
    },
    {
      city: "Tirana",
      country: "Albania",
      description: "A luxury hotel",
      id: "asass",
      images:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      name: "L Hotel",
      price: 200,
      rating: 4.8,
      stars: 5,
    },
    {
      city: "Tirana",
      country: "Albania",
      description: "A luxury hotel",
      id: "asassa",
      images:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      name: "L Hotel",
      price: 200,
      rating: 4.8,
      stars: 5,
    },
    {
      city: "Tirana",
      country: "Albania",
      description: "A luxury hotel",
      id: "asasssaa",
      images:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      name: "L Hotel",
      price: 200,
      rating: 4.8,
      stars: 5,
    },
    {
      city: "Tirana",
      country: "Albania",
      description: "A luxury hotel",
      id: "asassasasas",
      images:
        "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",
      name: "L Hotel",
      price: 200,
      rating: 4.8,
      stars: 5,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App


