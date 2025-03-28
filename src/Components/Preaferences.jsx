import React from 'react'
import './Preaferences.css'
import Logo from '../assets/logo.png'
import Face from '../assets/Frame.png'
import buiding from '../assets/building.png'
import book from '../assets/book.png'
import money from '../assets/money.png'
import govt from '../assets/govt.png'
import suitcase from '../assets/suitcase.png'
import note from '../assets/note.png'
import monitor from '../assets/monitor.png'
import rocket from '../assets/rocket.png'
import { useNavigate } from 'react-router-dom';

function Preaferences() {

  const navigate = useNavigate();
  function handleprefernces(){
    navigate('/dashboard')
    
    
  }


  return (

    <div className='Preferences-main'>
      <div className='preferences-from'>
        <img src={Logo} alt="" id='logo'/>
        <div className='preferences-choose'>
          <h2>Your Preferences</h2>
          <input type="text" name="username" id="username" placeholder='Tell us your username' />
          <p>Select one category that best describes your CNNCT</p>
          <div className="preferences-options">
            <button> <img src={buiding} alt="" /> Sales</button>
            <button><img src={book} alt="" /> Education</button>
            <button> <img src={money} alt="" /> Finance</button>
            <button><img src={govt} alt="" />Government & Politice</button>
            <button><img src={suitcase} alt="" />Cosnulting</button>
            <button><img src={note} alt="" />Recurting</button>
            <button><img src={monitor} alt="" />Tech</button>
            <button><img src={rocket} alt="" />Marketing</button>
          </div>
          <button id='submit' onClick={handleprefernces}>Continue</button>
          
        </div>
      </div>
      <img src={Face} alt="" className='Face-img' />

    </div>
  
  )
}

export default Preaferences