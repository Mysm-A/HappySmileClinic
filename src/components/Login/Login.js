import React, { useState } from "react";
import { LuUser} from "react-icons/lu";
import {MdLockOutline} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
// import { Navigate } from "react-router-dom";


function Login() {
  const [UserName, setName]= useState("");
  const [password, setPassword]= useState("");
    const [success, setSuccess] = useState(false);

      const navigate = useNavigate();
  const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();

    dispatch ( login  ( {UserName }));
    setSuccess(true);
  setTimeout(() => {navigate("/appointment") ; } , 1500) ;
  };

  
  return (
    <div className="backLogin">
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
    Don’t have an account? <Link to="/signup">Register</Link>
  </p>
</div>

      </form>
    </div></div>
  );
}

export default Login;
