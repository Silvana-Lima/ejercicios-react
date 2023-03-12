import { useState } from 'react'
import './password.css'

export const Password = () =>{

    const [show, setShow] = useState(false);

    return (
     
      <form action="" className="formPassword">
        <label htmlFor="password">Password</label>
        <input  type={show ? 'text' : 'password'} name="password" id="" /><button onClick={(e)=>{
            e.preventDefault()
            setShow(!show)
        }} ><i className={show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i></button>
      </form>


    )
}
