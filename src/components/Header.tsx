import { Link } from "react-router-dom"

export function Header(){
    return (
      <>
        <header className="App-header">
          <div className="title">Planner</div>
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
          </ul>
        </header>
      </>
    );
}