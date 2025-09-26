import {useNavigate } from "react-router-dom";

import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

   const scrollToLogin = () => {
   const section = document.getElementById("loginSection");
  if (section) section.scrollIntoView({ behavior: "smooth" });
};


  return (
    
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰</button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="/">HOME</a></li>
          <li><a href='#about'>ABOUT US</a></li>
        </ul>
      </div>  

       <div className="logo" >
       <a href="#" onClick={(e) => {e.preventDefault() ;
         window.scrollTo({ top: 0, behavior: "smooth" }) ;
         }}>HAPPY SMILE </a> </div>
        
      <div className="nav-right">
        <button className="login-btn" onClick={scrollToLogin}>Sign In</button>
             </div>
    </nav>
  );
}

export default Navbar ;
