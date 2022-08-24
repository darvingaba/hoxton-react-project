import { useEffect, useState } from "react";
import { Header } from "../components/Header";
type NewUser={
    name:string;
    email:string;
    password:string
}
export function SignUp(){
    let[newUser,setNewUser]=useState({}as NewUser)
    let[user,setUser]=useState({}as NewUser)

    useEffect(()=>{
      fetch("http://localhost:3001/user")
      .then(resp=>resp.json())
      .then(resp=>setUser(resp))
    })

    function updateServer(e){
        e.preventDefault();
        fetch("http://localhost:3001/user",{
            method: "PATCH",
            body:JSON.stringify({
                name:newUser
            })
        })
        
    }
    return (

        <div className="loginPage">
            <h1>Create an Account</h1>
            <form onSubmit={
                updateServer
            }>
                <label>Name
                    <input type="text" name="name" value={newUser.name}
                     onChange={(e)=>setNewUser({...newUser,name:e.target.value})
                }
                    />
                </label>
                <label>Email
                    <input type="text" name="email"  />
                </label>
                <label>Password
                    <input type="password" name="password"  />
                </label>

                <button>Sign Up</button>
            </form>
        </div>
    );
}