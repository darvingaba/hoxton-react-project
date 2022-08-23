type Hotel = {
  city: string;
  country: string;
  description: string;
  id: string;
  images: string;
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
                <img src={hotel.images} alt="" />
                <button className='bookButton'>Book</button>
              </li>
            ))}
          </ul>
        </div>  
    )
}