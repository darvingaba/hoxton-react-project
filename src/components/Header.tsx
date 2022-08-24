import { Link } from "react-router-dom"

export function Header({serverUser}){


    return (
      <>
        <header className="App-header">
          <div className="title">Planner</div>
          <ul className="menu">
            <Link to={"landingpage"}><li>Home</li></Link>
            <li>About</li>
            <li>Contact</li>
            <Link to={"/login"}>
              {serverUser.name!==""? <li>{serverUser.name}</li>:
              <li>Login</li>
              }
            </Link>
          </ul>
        </header>
      </>
    );
}