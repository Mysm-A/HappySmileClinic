import { useSelector } from "react-redux" ;
import { useNavigate } from "react-router-dom" ;
import React from "react";

function HeroButton()  { 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn) ; 

  const navigate = useNavigate() ;

  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/Appointment") ; 
    } else {
      navigate("/Login");
    }
  };

  return (
    <button className="heroBtn" onClick={handleClick}>Get your smile </button>

  );}


export default HeroButton ;
 

