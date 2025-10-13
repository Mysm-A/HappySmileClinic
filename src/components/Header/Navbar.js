import {useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import {useEffect} from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

   const scrollToLogin = () => {
   const section = document.getElementById("loginSection");
  if (section) section.scrollIntoView({ behavior: "smooth" });
};
  
  const goHomeAndReload = (e) => {
    e.preventDefault(); window.location.href = window.location.origin + window.location.pathname;
  };
 
  return (
    
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰</button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><a href="/" onClick={goHomeAndReload} > HOME</a></li>
            <li><a href='#' onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('about'); 
              if(section) section.scrollIntoView({ behavior:"smooth" }); }}> ABOUT US</a></li>
        </ul>
      </div>  

       <div className="logo" >
       <a href="/" onClick={goHomeAndReload}> HAPPY SMILE </a> </div>
        
      <div className="nav-right">
        <button className="login-btn" onClick={scrollToLogin}>Sign In</button>
             </div>
    </nav>
  );
}

export default Navbar ;