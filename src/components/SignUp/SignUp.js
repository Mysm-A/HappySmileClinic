import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup({onSwitch, onLoginSuccess }) {
  const  navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true) ;
    if(onLoginSuccess) onLoginSuccess();
    setTimeout(() => {
      navigate("/appointment");  } , 150 );
  };

  return (
    <div className="wrapper" id="signinSection">
      <h2> Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input type="text" placeholder="First Name" required />
          <LuUser className="icon"/>
        </div>
        <div  className="inputbox" >
        <input  type="text" placeholder="Last Name" required/>
        <LuUser className="icon"/>
        </div>
        <div className="inputbox">
          <input type="password" placeholder="Password" required />
          <MdLockOutline className="icon" />
        </div>
        <div  className="inputbox">
          <input type="email"  placeholder="Email"   required/>
          <IoMailOutline  className="icon"/>
        </div> 

        <button type="submit">Create Account</button>
        <div className="register">
         <p>Already have an account?{" "} <span onClick={onSwitch}>Sign In </span> </p> </div>
        {success && <p className="success">Account Created Successfully!</p>}
      </form>
      
    </div>
  );

}

export default Signup;
