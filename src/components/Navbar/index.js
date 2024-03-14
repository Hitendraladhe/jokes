import {Link, useNavigate} from 'react-router-dom'
import './index.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React,{ useState } from 'react'


const Navbar =()=>{
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('user'));
  console.log((auth.username)); 
  const onLogOut=()=>{
    
    localStorage.removeItem('user');
    const auth = localStorage.getItem('user');
    if(!auth){
      navigate('/login')
    }
  }
  

    return(
      <>
       <nav className="navbar">
       <h3 className='headingNav'>Blogs</h3>
        <ul className="smUl">
         <li>Bloogy</li>
         <li>home</li>
         <li>about</li> 
         <li>Contact</li>   
        </ul>
        <ul className="lgUl">
         <li><Link to='/' style={{color: "White", textDecoration: "none"}}>home</Link></li>
         <li><Link style={{color: "White", textDecoration: "none"}}>about</Link></li> 
         <li><Link style={{color: "White", textDecoration: "none"}}>Contact</Link></li>   
        </ul>
        
        <Popup trigger={
          <button className='avtarBtn' >
          <img src='https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-business-man-avatar-social-responsibility-vector-png-image_1529546.jpg' className='avatar' alt='avatar'/> 
        </button>
        } position="bottom-left center">
        <div className="userUl">
        <ul className="userul">
         <li><img src='https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-business-man-avatar-social-responsibility-vector-png-image_1529546.jpg' className='avatar' alt='avatar'/></li>
         <li>{auth.username}</li>
         <li>{auth.email}</li> 
         <button className='logOutBtn' onClick={onLogOut}>logOut</button>   
        </ul>
        </div> 
        </Popup>
       </nav>  
      </>
    ) 
  }


export default Navbar