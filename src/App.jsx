import React from 'react'
import './App.css'
import Home from './Components/home.jsx'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Signup from './Components/signup.jsx'
import Login from './Components/login.jsx'
import Preaferences from './Components/Preaferences.jsx'
import Dashboard from './Components/Dashboard/dashboard.jsx'
import Event from './Components/Dashboard/Event.jsx'


function App() {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/preferencespage' element={<Preaferences />}> </Route>
          
          <Route path="/dashboard" element={<Dashboard />} > 
          <Route index element={<Event />} ></Route>
          <Route path="booking" element={<h1>Booking</h1>} > </Route>
          <Route path="availability" element={<h1>Availability</h1>} > </Route>
          <Route path="settings" element={<h1>Settings</h1>} > </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App