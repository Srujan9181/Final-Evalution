import React from 'react'
import Face from '../assets/Frame.png'
import './login.css'
import Logo from '../assets/Logo.png'
import { useNavigate } from'react-router-dom'

function login() {
    let navigate = useNavigate()

    function hnadlesignup(){
        navigate('/signup')
    }


  return (
    <div className="login">
        <div id='signin'>
            <img id='logo' src={Logo} alt="" />
            <div id='formdiv'>
                <form action="" id='form'>
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button type="submit">Log In</button>
                    <p>Don't have an account? <span onClick={hnadlesignup}>Signup</span></p>
                </form>
            </div>
            <div id='protection'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
        </div>
        <img id='img' src={Face} alt="" />
    </div>
  )
}

export default login