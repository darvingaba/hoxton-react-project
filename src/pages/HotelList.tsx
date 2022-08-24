type Hotel = {
  city: string;
  country: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: number;
  rating: number;
  stars: number;
};
type Props={
    hotels: Hotel[]
}

export function HotelList({hotels}:Props){
    return(
        <div className="hotelsContainer">
          <ul className="hotelsList">
            {hotels.map((hotel) => (
              <li className='singleHotel'>
                <p>{hotel.name}</p>
                <img src={hotel.image} alt="" />
                <button className='bookButton'>Book</button>
              </li>
            ))}
          </ul>
        </div>  
    )
}