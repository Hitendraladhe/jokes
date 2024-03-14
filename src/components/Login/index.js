import React,{useState} from 'react'
import './login.css'
import { useNavigate, Link } from 'react-router-dom';

const LogIn =()=>{
  const navigate = useNavigate();
  //console.log(navigate);

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

  const onSubmitForm=async(e)=>{
    e.preventDefault()
    const res = await fetch("https://blogbackend-2.onrender.com/LogIn", {method: "POST", body: JSON.stringify(user), headers:{'Content-Type': 'application/json'}});
    console.log(res);
    
    //localStorage.setItem( 'hero', user)
    
    
    if(res.ok === true){
      await localStorage.setItem('user', JSON.stringify(user) )
      const auth = localStorage.getItem('user');
      console.log(auth);
      navigate('/');
    };
       
    
  }

    return(
      <>
       <div className='formContainer'>
         <form className='form' onSubmit={onSubmitForm}>
          <h4>Log In</h4>
            <label htmlFor='name'>Name</label>
            <input className='input' onChange={onChangeHandle} id='name' name="username" />
            <label htmlFor='email'>Email</label>
            <input className='input' onChange={onChangeHandle} id='email' name="email" />
            <label htmlFor='password'>Password</label>
            <input className='input' onChange={onChangeHandle} id='password' name="password" />
            <button type='submit'>Submit</button>
            <h6><Link to='/signup' className='Link' style={{color: "Black", textDecoration: "none"}}>Sign Up for new User</Link></h6>
         </form>
       </div>   
      </>
    )
}

export default LogIn