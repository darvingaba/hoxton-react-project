import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};
type Props = {
  user: User;
};
export function Header({user}:Props) {

    


  function Logout(){
    fetch("http://localhost:3000/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "",
        email: "",
        password: "",
      }),
    });
  }
  return (
    <>
      <header className="App-header">
        <div className="title">Planner</div>
        <ul className="menu">
          <Link to={"landingpage"}>
            <li>Home</li>
          </Link>
          <Link to={"hotelList"}>Hotels</Link>
          <Link to={"/login"}>
            {user.name !== "" ? (
              <li onClick={Logout}>Logout</li>
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </header>
    </>
  );
}
