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
      fetch(`http://localhost:3000/hotels/${params.id}`)
        .then((response) => response.json())
        .then((data) => setHotel(data));
    }, []);

    return (
      <div className="hotel">
        <div className="leftSide">
          <img src={hotel.image} alt="" />
          <p>{hotel.description}</p>
        </div>
        <div className="rightSide">
          <h2>{hotel.name}</h2>
          <p>Price per night: {hotel.price}$</p>
          <p>{hotel.stars} Stars</p>
          <form>
            <label>
              Set Arriving Date
              <input type="date" name="" id="" />
            </label>
            <label>
              Set Leaving Date
              <input type="date" name="" id="" />
            </label>
            <label>
              Number of people
              <input type="number" name="" id="" />
            </label>
          </form>
          <button>Book</button>
        </div>
      </div>
    );
}