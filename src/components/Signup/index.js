import React,{useState} from 'react'
import './signup.css'
import {Link, useNavigate } from "react-router-dom";

const SignUp =()=>{
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const users = {
    username: "",
    email: "",
    passwod: ""
  }

  const onChangeHandle=(event)=>{
    const {name, value} = event.target
    setUser({...user, [name]: value})
    
    
  }

  const onSubmitForm=async (e)=>{
    e.preventDefault()
    const res = await fetch("https://blogbackend-2.onrender.com/SignUp", {method: "POST", body: JSON.stringify(user), headers:{'Content-Type': 'application/json'}});
    if(res.ok === true){
      const auth = localStorage.setItem('user', JSON.stringify(user));
       navigate('/');
    }
  }

    return(
      <>
       <div className='formContainer'>
         <form className='form' onSubmit={onSubmitForm}>
          <h4>Sign Up</h4>
            <label htmlFor='name'>Name</label>
            <input className='input' onChange={onChangeHandle} id='name' name="username" />
            <label htmlFor='email'>Email</label>
            <input className='input' onChange={onChangeHandle} id='email' name="email" />
            <label htmlFor='password'>Password</label>
            <input className='input' onChange={onChangeHandle} id='password' name="password" />
            <button type='submit'>Submit</button>
            <h6><Link to='/login' className='Link' style={{color: "Black", textDecoration: "none"}}>Log In for regular User</Link></h6>
         </form>
       </div>   
      </>
    )
}

export default SignUp