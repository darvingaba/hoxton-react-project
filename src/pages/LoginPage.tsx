import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HotelList } from "./HotelList";
import { LandingPage } from "./LandingPage";

type User = {
  name: string;
  email: string;
  password: string;
};
type Props = {
  setServerUser: React.Dispatch<React.SetStateAction<User>>;
  input: { email: string; password: string };

  setInput: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  serverUser: User;
};

export function LoginPage({
  setServerUser,
  input,
  serverUser,
  setInput,
}: Props) {
  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((resp) => resp.json())
      .then((resp) => setServerUser(resp));
  }, []);

  if (
    input.email === serverUser.email &&
    input.password === serverUser.password
  ) {
    console.log(`${input.email} logged in`);
  } else {
    console.log("no match");
  }

  return (
    <div className="loginPage">
        <h1>Log In</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </label>
        <Link to={"/landingpage"}>
          <button>Log In</button>
        </Link>
      </form>

      <div className="signup">
        <h1>Don't have an account? Sign up</h1>
        <Link to={"/signup"}>Create Account</Link>
      </div>
    </div>
  );
}
