import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
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
export function SingleHotel(){
    let[hotel,setHotel]=useState({}as Hotel)
    let params=useParams()

    useEffect(() => {
      fetch(`http://localhost:3001/hotels/${params.id}`)
        .then((response) => response.json())
        .then((data) => setHotel(data));
    }, []);

    return (
      <div className="hotel">
        <div className="leftSide">
          <img src={hotel.image} alt="" />
        </div>
        <div className="rightSide">
          <h2>{hotel.name}</h2>
          <p>{hotel.description}</p>
          <p>Price per night: {hotel.price}$</p>
          <p>{hotel.stars} Stars</p>
          <button>Book</button>
        </div>
      </div>
    );
}