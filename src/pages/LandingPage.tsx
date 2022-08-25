import { Link } from "react-router-dom";


export function LandingPage(){
    return (
      <div className="landingPage">
        <div className="upper">
          <h1>
            Plan the perfect hotel stay with <span className="planner">Planner</span> in one tap
          </h1>
          <p className="description">
            We know that choosing the right hotel for your stay can be a bit
            hit-and-miss. That's why we developed a personalised hotel matching
            system that helps you find the perfect place to stay, no matter what
            your budget.
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