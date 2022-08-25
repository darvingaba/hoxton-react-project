import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  name: string;
  email: string;
  password: string;
};
type Props={
  user:User
}
export function SignUp({user}:Props){
    let[name,setName] =useState("")
    let[email,setEmail] =useState("")
    let[password,setPassword] =useState("")

   
    
    function updateServer(e){
      e.preventDefault()
        fetch("http://localhost:3000/user", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({
            name:name,
            email:email,
            password:password
          })
        });
    }



    return (
      <div className="loginPage">
        <h1>Create an Account</h1>

        {user.email != "" ? (
          <li>
            <h2>Hello {user.name}. Please sign in.</h2>
          </li>
        ) : (
          <li></li>
        )}
        <form>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button onClick={updateServer}>Sign Up</button>
          <Link to={"/login"}>
            <button>Sign In</button>
          </Link>
        </form>
      </div>
    );
}