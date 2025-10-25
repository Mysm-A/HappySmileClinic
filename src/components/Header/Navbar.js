import {useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import {useEffect} from 'react';
import { FaCircleArrowUp } from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = useState(false) ;
  const navigate = useNavigate() ;
  
  const goHomeAndReload = (e) => {
    e.preventDefault(); window.location.href = window.location.origin + window.location.pathname; }

  const goToSection= (sectionId) => {
    if (window.location.pathname === "/"){
  const section=document.getElementById(sectionId);
  if (section) section.scrollIntoView ({behavior: "smooth"});
    }else {navigate("/");
    setTimeout(() => {
    const section=document.getElementById(sectionId);
  if (section) section.scrollIntoView ({behavior: "smooth"});
    } , 400);
    }};
 
  return (
    <>
     <a href='#' className='scrollUp' onClick={ (e) =>{e.preventDefault();
            window.scrollTo({top:0, behavior:"smooth"}); }}>
              <FaCircleArrowUp /></a>
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰</button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
            <li><a href="/" onClick={goHomeAndReload} > HOME</a></li>
          
            <li><a href='#about' onClick={(e) => {
              e.preventDefault(); goToSection("about"); }}> ABOUT US</a></li>
            
              <li><a href='#' onClick={(e) => {e.preventDefault();
              const section = document.getElementById('footer'); 
              if(section) section.scrollIntoView({ behavior:"smooth" }); }}>CONTACT</a></li>

               <li><a href='#Services' onClick={() =>  navigate("/Services")}> SERVICES </a></li>
        </ul>

        
      </div>  

       <div className="logo" >
       <a href="/" onClick={goHomeAndReload}> HAPPY SMILE </a> </div>
      <div className="nav-right">
        <button className="login-btn" onClick={() => navigate("/Appointment")}>Sign In</button>
             </div>
    </nav>
    </>
  );
}

export default Navbar ;