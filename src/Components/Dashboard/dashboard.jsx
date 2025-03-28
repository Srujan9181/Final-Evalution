import React from "react";
import './dashboard.css'
import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";
export default function dashbord(){
    return (
       
        <div className="dashboard">
             <Navbar />
             
             <div className="dashboard-content">
                <Outlet /> 
             </div>
            
             
             
            
            
        </div>
    );
}