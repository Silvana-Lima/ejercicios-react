import { useState } from "react"
import { Modal } from "./Modal"
import "../styles/modal.css"

export const NavBar = ()=>{
    // states login
    const [user, setUser] = useState("");
    const [password, setPasword] = useState("");
    const [login, setLogin] = useState(false);
    const [ error , setError] = useState(false);
      // states register
    const [newUser, setNewUser] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [createUser, setcreateUser] = useState(false);

    const  validateLogin = ()=>{

        if (user === "silvana" && password === "12345") {
            setLogin(true)
        } else {
            setError(true)
        }
    }

    const validateRegister = ()=>{
          let validUser = newUser.length >= 5;
          let validPassword = newPassword.length >= 5;
          
          if(validUser && validPassword){
             setcreateUser(true)
          } else {
            setError(true)
          }
    
    }


    return(
        <div>
            <div className={login || createUser? "hidden" : undefined}>
            <Modal buttonOpenText="Login">
                <form action="">
                    <label htmlFor="user">Username</label>
                    <br/>
                    <input type="text" name="user" placeholder="Enter username" onChange={(e)=> setUser(e.target.value)} />
                    <br/>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" name="password" placeholder="Enter password" onChange={(e)=> setPasword(e.target.value)}/>
                    <br/>
                    {error ? <span>"Datos incorrectos!!"</span> : undefined}
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault()
                        validateLogin()}} >Login</button>

                </form>
            </Modal>
            </div>
            <div className={login ? "show" : "hidden"} >
                <h2>¡Bienvenid@ {user}!</h2>
            </div>
            

            <div className={createUser || login ? "hidden" : undefined}>
            <Modal buttonOpenText="Register">
            <form action="">

                    <label htmlFor="user">Username</label>
                    <br/>
                    <input type="text" name="user" placeholder="Enter username" onChange={(e)=> setNewUser(e.target.value)}/>
                    <br/>
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" name="password" placeholder="Enter password" onChange={(e)=> setNewPassword(e.target.value)} />
                    <br/>
                    {error ? <span>Datos incorrectos!!<hr/>Usuario y password deben tener mas de 5 caracteres cada uno.</span> : undefined}
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault()
                        validateRegister()}}>Register</button>

                </form>
            </Modal>
            </div>
            <div className={createUser ? "show" : "hidden"} >
                <h2>¡Bienvenid@ {newUser}!</h2>
            </div>
        </div>
    )
}