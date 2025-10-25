import React, { useState } from "react";
import { LuUser} from "react-icons/lu";
import {MdLockOutline} from "react-icons/md";
import { useNavigate} from "react-router-dom";
import "./Login.css";
import { login } from "../authSlice";


function Login({onSwitch, onLoginSuccess}) {
  const [UserName, setName]= useState("");
  const [password, setPassword]= useState("");
    const [success, setSuccess] = useState(false);

      const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    if( onLoginSuccess)onLoginSuccess();
    setTimeout(() => {
      navigate("/appointment") ; } , 150) ;
  };

  
  return (
    <div className="wrapper" id="loginSection">
        <h2>SIGN IN</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input type="text" placeholder="UserName"  onChange={(e) => setName(e.target.value)}required />
          <LuUser className="icon" />
        </div>

        <div className="inputbox">
          <input type="password" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)}required />
          <MdLockOutline className="icon" />
      </div>

        <button type="submit">LOGIN</button>
       {success && <p className="success">Login successful</p>}


       <div className="register">
  <p>
    Don’t have an account?{""}
    <span onClick={onSwitch} >Register</span>
  </p>
</div>

      </form>
    </div>
  );
}

export default Login;
