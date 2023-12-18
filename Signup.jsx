import React  from 'react'
import './Login.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import mobile1 from '../assets/mobile1.png'
import password_icon from '../assets/password.png'
import {Link} from 'react-router-dom';
function Signup(){

    
    return (
        <div className='container'>
        <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                { <img src={user_icon}alt=""/> }
            <input type="text" placeholder="First Name" required/>
            
            </div>
            <div className="input">
                { <img src={user_icon}alt=""/> }
            <input type="text" placeholder="Last Name" required/>
             
            </div>
        <div className="input">
        <img src={email_icon}alt=""/>
            <input type="email" placeholder="Enter Email Id" required/>
            </div>
            
            <div className="inpu">
                <form>
            <div className="input">
                { <img src={mobile1}alt=""/> }
            <input type="tel" placeholder="Enter phone number" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
            
            
            </div>
            </form><br></br>
            
                    <div className="input">
        <img src={password_icon}alt=""/>
            <input type="password" id="password" placeholder="Enter Password" required/>
            </div>
            
        </div>
{/*    
         <div className="submit-container"> */}
                <div className="submitcontainer2" id="submit-container2">
        <div input type="button" id="button"><Link to="/">SUBMIT</Link></div> 
           
        </div>
        </div>
        </div>
        // </div>
       
    
    );
}

export default Signup;

