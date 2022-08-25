import { useState } from "react";
import { Link } from "react-router-dom";


type User = {
  name: string;
  email: string;
  password: string;
};
type Props = {
  user: User;
};

export function LoginPage({user}:Props) {
  
  let [emailInput, setEmailInput] = useState("");
  let [passwordInput, setPasswordInput] = useState("");
  // console.log(emailInput)

  function CheckAccount(){
    if(emailInput!=user.email&& passwordInput!=user.password){
      alert("wrong credentials")
    }else{

    }
  }

  return (
    <div className="loginPage">
      <h1>Log In</h1>
      <form>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </label>
        <Link to={"/landingpage"}>
          <button
          >Log In</button>
        </Link>
      </form>

      <div className="signup">
        <h1>Don't have an account? Sign up</h1>
        <Link className="createAccount" to={"/signup"}>
          Create Account
        </Link>
      </div>
    </div>
  );
}
