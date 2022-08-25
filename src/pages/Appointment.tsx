import { useEffect, useState } from "react";
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
type Date={
    arrivingDate:string,
    leavingDate:string,
    people:string
}
export function Appointment(){
    let [hotel, setHotel] = useState({} as Hotel);
    let [date,setDate]=useState({} as Date)
    let params = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/hotels/${params.id}`)
        .then((response) => response.json())
        .then((data) => setHotel(data));
    }, []);
    useEffect(() => {
      fetch("http://localhost:3000/appointment")
        .then((response) => response.json())
        .then((data) => setDate(data));
    }, [date]);

    function Cancel() {
      fetch("http://localhost:3000/appointment", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          arrivingDate: "",
          leavingDate: "",
          people: "",
        }),
      });
    }
    return(
        <div className="appointment">
            <div className="left">
                <img src={hotel.image} alt="" />
            </div>
            <div className="right">
                <h1>Appiontment details</h1>
                <h2>{hotel.name}</h2>
                <p>Arriving on date: {date.arrivingDate}</p>
                <p>Leaving on date: {date.leavingDate}</p>
                <p>People: {date.people}</p>
                <button
                onClick={Cancel}>Cancel</button>
            </div>
        </div>
    )
}