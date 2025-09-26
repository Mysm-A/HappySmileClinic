import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import {Link,  useNavigate } from "react-router-dom";

import "./Signup.css";

function Signup() {
  const  navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true) ;
    setTimeout(() => {
      navigate("/appointment");  } , 2000 );
  };

  return (
    <div  className="backLogin">
    <div className="wrapper" id="signinSection">
      <h2> Create your account</h2>
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

        <button type="submit">Create account</button>
        <div className="register"> <p>Already have an account?{" "} <Link to="/">Sign In </Link> </p> </div>
        {success && <p className="success">Account created successfully!</p>}
      </form>
      
    </div>

    </div>
  );

}

export default Signup;
