import { Link } from "react-router-dom";


export function LandingPage(){
    return (
      <div className="landingPage">
        <div className="upper">
          <h1>
            Experience the sensation of safe traveling and planned holidays
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            dignissimos at doloremque, provident numquam fugiat ad expedita quo
            iusto et vel magnam illum magni molestiae ipsam unde architecto. Est
            illum doloremque omnis commodi fugit dolor dolores, reiciendis quos
            explicabo voluptatum modi nesciunt, fuga, necessitatibus corporis
            odio laboriosam! Laborum, et distinctio!
          </p>
          <Link to={`/hotelList`}>
            <button className="exploreButton">Explore</button>
          </Link>
        </div>
        <div className="lower">
          <img className="worldMap" src="/src/img/World Map.svg" alt="" />
        </div>
      </div>
    );
}