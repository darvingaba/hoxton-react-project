import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
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
    let[arrivingDate,setArrivingDate]=useState("")
    let[leavingDate,setLeavingDate]=useState("")
    let[people,setPeople]=useState("")
    // console.log(date)
    
    let params=useParams()

    useEffect(() => {
      fetch(`http://localhost:3000/hotels/${params.id}`)
        .then((response) => response.json())
        .then((data) => setHotel(data));
    }, []);
    function updateServer(e) {
      e.preventDefault();
      fetch("http://localhost:3000/appointment", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          arrivingDate,
          leavingDate,
          people
        }),
      });
    }

    return (
      <div className="hotel">
        <div className="leftSide">
          <img src={hotel.image} alt="" />
          <p className="descpHotel">{hotel.description}</p>
        </div>
        <div className="rightSide">
          <h2>{hotel.name}</h2>
          <p>{hotel.city},{hotel.country}</p>
          <p>Price per night: {hotel.price}$</p>
          <p>{hotel.stars} Stars</p>
          <form>
            <label>
              Arriving Date
              <input
                type="date"
                value={arrivingDate}
                onChange={(e) => setArrivingDate(e.target.value)}
              />
            </label>
            <label>
              Leaving Date
              <input
                type="date"
                value={leavingDate}
                onChange={(e) => setLeavingDate(e.target.value)}
              />
            </label>
            <label>
              Number of people
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              />
            </label>
          </form>
          <button onClick={updateServer}>Book</button>
          <Link to={`/appointment/${hotel.id}`}>Check your booking</Link>
        </div>
      </div>
    );
}