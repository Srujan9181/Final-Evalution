import React from 'react'
import logo from '../../assets/logo.png'
import Events from '../../assets/Events.png'
import Bookings from '../../assets/Booking.png'
import Availability from '../../assets/Availability.png'
import Settings from '../../assets/settings.png'
import './Navbar.css'
import { NavLink,useLocation} from 'react-router-dom'

function Navbar() {
  const location = useLocation();
  return (
    <div className='Navbar'>   
        <img id='logonav' src={logo} alt="" />
        <div id='Navlinks'> 
            <NavLink to="/dashboard" end><img src={Events} alt="" />Events</NavLink>
            <NavLink to='/dashboard/booking'><img src={Bookings} alt="" />   Booking</NavLink>
            <NavLink to='/dashboard/availability'><img src={Availability} alt="" />Availability</NavLink>
            <NavLink to='/dashboard/settings'><img src={Settings} alt="" />Settings</NavLink>
            {location.pathname === '/dashboard' && (
          <button className='createmeating' onClick={createevent}>Create</button>
        )}
        </div>
        
        <div>user</div>
        
    </div>
  )
}

export default Navbar