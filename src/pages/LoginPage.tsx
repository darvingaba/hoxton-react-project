import { useEffect, useState } from "react";

type User={
    name:string,
    email:string,
    password:string
}
export function LoginPage(){
    let[serverUser,setServerUser]=useState<User>({} as User)
    let[input,setInput]=useState({name:"",password:""})
    console.log(serverUser)

    useEffect(()=>{
        fetch("http://localhost:3001/user")
        .then(resp=>resp.json())
        .then(resp=>setServerUser(resp))
    },[])

    return (
      <div className="loginPage">
        <form>
          <label>
            Email
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" name="" />
          </label>
          <button>Log In</button>
        </form>
      </div>
    );
}