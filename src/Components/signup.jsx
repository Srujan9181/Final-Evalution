import React from 'react'
import './signup.css'
import Logo from '../assets/logo.png'
import Face from '../assets/Frame.png'
import { useNavigate } from 'react-router-dom'

function signup() {
  const navigate = useNavigate();
  function handlecreateaccount(){
     
      navigate('/preferencespage');
  }
  return (
    <div className="login">
    <div className='signup'>
       <img id='logo' src={Logo} alt="" />
       <div id='formdiv'>
                <form id='form'>
                    <div className="formheading">
                      <h4>Create an account</h4>
                      <p className='navlogin' onClick={()=>navigate('/login')}>Sign in instead</p>
                    </div>
                    <label htmlFor="name">First name</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="lastname">Last name</label>
                    <input type="text" name="lastname" id="lastname"  required />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"  required />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="password" id="password"  required /><br />
                    <p><input type="checkbox" name="termsandcondition" id="termsandcondition" required/> By creating an account, I agree to our Terms of use 
                    and Privacy Policy </p>
                    
                    <button className="submit" onClick={handlecreateaccount}>Create an account</button>

                </form>
            </div>
      <div id='protection'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
    </div>
    <img id='img' src={Face} alt="" />
    </div>
  )
}

export default signup