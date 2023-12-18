import React from "react";
import './Login.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import {Link} from 'react-router-dom';
 const Login = () => {

    return (
        <div className='container'>
        <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                { <img src={user_icon}alt=""/> }
            <input type="text" placeholder=" Enter Name" required/> 
            </div>
        <div className="input">
        <img src={email_icon}alt=""/>
            <input type="email" placeholder="Enter Email Id" required/>
            </div>
        <div className="input">
        <img src={password_icon}alt=""/>
            <input type="password" id="password" placeholder="Enter Password" required/>
            </div>
            
        </div>
        <div className="submitcointainer1" id="subit-container1">
            <div className="submit1" id="submit1"></div>
        </div>
       <div className="submitcontainer2" id="submit-container2"><br></br>
       <div input type="button" id="button"><Link to="/">LOGIN</Link></div> 
        <div className="forgot-password">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account? <span><Link to="/Signup">&nbsp;SignUp</Link></span></div>
       </div>
        </div>
        
       
    
    )
}
export default Login;

