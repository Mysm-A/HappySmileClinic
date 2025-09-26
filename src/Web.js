import React ,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from  './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
 import Navbar from  './components/Header/Navbar';
  import Image from  './Images/2.jpeg';
 import dental from './Images/dental.png';
import './components/Container/container';
import Appointment from './components/Container/Appointment';
import Container from './components/Container/container';
import Footer from './components/Footer/Footer';
import Protected from './components/Container/Protected'; 


function Web() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }});
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);
  return (
    
    <Router>
       <Navbar />
       <div id="home"  className="getSmile" >
       <div  className="appointmentContent">

        <h1  className="h1">Healthy Teeth, Beautiful Smiles, Happy Generations</h1>
        <p className="title">
              For a bright and confident smile, we stand by your side with advanced and effective oral care treatments.
        </p>
        <button  className="heroBtn" onClick={()=>{
          const section =document.getElementById('loginSection') ;
          if( section)section.scrollIntoView({ behavior:'smooth'});
        }}>Get your smile </button>

 </div>
  
<div  className="heroImage" style={{ backgroundImage: `url(${dental})` }}></div>
</div>
         <div  id='about'  className='aboutSection scroll-animate' style={ {backgroundImage: `url(${Image})` }}>
          <h2   className="abou">ABOUT US</h2>
          <p   className="paragraph">
              Welcome to Happy Smile Clinic! We are dedicated to providing
              high-quality dental care
          with the latest technology and a caring team to ensure your best smile.
        </p>
       </div>

           <div id='hours'  className='hoursSection scroll-animate' > 
          <h2  className="h2s" > OUR WORKING HOURS </h2>
             <ul className="time"><li>
                <span>Monday:</span><span> 09:00 - 22:00</span> </li>
              <li>
              <span> Tuesday:</span><span> 09:00 - 22:00 </span></li>
              <li>
                <span>Wednesday:</span><span> 09:00 - 22:00 </span> </li>
              <li>
                <span> Thursday:</span><span> 09:00 - 22:00 </span>
                </li>
              <li>
                <span>Friday: </span><span>09:00 - 22:00 </span></li>
              <li>
                <span> Saturday:</span><span> 09:00 - 22:00</span></li>
              <li>
                <span> Sunday: </span><span>--Closed--</span></li>
             </ul>
        </div> 
        
   {/* <Appointment />  */}
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login"  element={<Login />} />
        < Route path="/appointment"  element={ <Protected><Appointment /></Protected>}/>
          <Route path="/Appointment" element={<Appointment />} />
      </Routes>
      <div  className="footer">
      <div className="titleFooter"> 
        <h2 > HAPPY SMILE</h2>

        <div className="heroFooter">
       <div  className="footerSection">
          <h4> Contact Us </h4>
          <p>Istanbul /TURKEY </p>
          <p>  +90 555 555 00 00</p>
          <p> info@hsmile.com</p>
      </div>

      <div   className="footerSection">
        <h4> Quick Links</h4>
        <ul>
           <li><a href="#"onClick={(e) => {e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" } ) ; }} > Home </a> </li>
          <li><a href="#about"> About Us</a></li>
          <li><a href="#hours"> Working hours</a></li>
        </ul>
      </div>

   
</div>
      </div>

    
    </div>

    </Router>


    
  );}

export default Web ;
