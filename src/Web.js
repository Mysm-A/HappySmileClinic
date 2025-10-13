import React ,{useEffect} from 'react';
import "./Web.css";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from  './components/login/Login';
import SignUp from './components/signup/Signup';
 import Navbar from  './components/Header/Navbar';
  import Image from  './Images/2.jpeg';
 import dental from './Images/dental.png';
import './components/Container/container';
import Appointment from './components/Container/Appointment';
import Container from './components/Container/container';
import Footer from './components/Footer/footer';
import Protected from './components/Container/Protected'; 
import clinicImg from  "./Images/6.png";
import  "./Images/7.jpeg";
import  "./Images/8.jpeg";
import  "./Images/10.jpeg";
import  "./Images/11.jpeg";
import  "./Images/12.jpeg";
import "./Images/13.jpeg";
import { FaGithub } from "react-icons/fa";
import { MdDescription } from 'react-icons/md';


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

  const handleScroll = () => {
      const image = document.querySelector(".zoomImg");
      if (!image) return;

      const rect = image.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPercent = 1 - rect.top / windowHeight;
        const scale = 1 + scrollPercent * 0.2;
        image.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);


    const doctorsData = [
      { id:1 , image: require('./Images/7.jpeg') , name:"Dr. Omar", title:'Orthodontist'  }, 
      { id:2 , image: require('./Images/8.jpeg') , name:"Dr. Noah", title:'Esthetic Dentist'  }, 
      { id:3 , image: require('./Images/10.jpeg') , name:"Dr. Sara", title:'Orthodontist'  }, 
      { id:4 , image: require('./Images/11.jpeg') , name:"Dr. Melissa ", title:'Prosthodontist'  }, 
      { id:5 , image: require('./Images/12.jpeg') , name:"Dr. Sophia", title:'Dental Technician'  }, 
      { id:6 , image: require('./Images/13.jpeg') , name:"Dr. Asya", title:'Dental Technician'  }, 

    ];

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
                <span> Thursday:</span><span> 09:00 - 22:00 </span></li>
              <li>
                <span>Friday: </span><span>09:00 - 22:00</span></li>
              <li>
                <span>Saturday:</span><span> 09:00 - 22:00</span></li>
              <li>
                <span>Sunday: </span><span>--Closed--</span></li>
             </ul>
        </div> 
        <div className='image' >
          <img className='zoomImg' src={clinicImg} alt='clinic'/>
        </div>

        <div className='ourDoctors  scroll-animate'>
          <h2 className='drTitle'> Meet Our Doctors</h2>
          <div className='drContainer'>{doctorsData.map((doctor)=> (
            <div className='drCard scroll-animate'  key={doctor.id}>
              <div className='drImage'><img src={ doctor.image} />
          </div>

          <h4 className='drNames'>{doctor.name}</h4>
          {/* <h5 className='drTitle'>{doctor.drTitle}</h5> */}
          <p className='doctorDescription'>{doctor.title}</p>
        </div>
          ))}
          </div>
          </div>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        < Route path="/Appointment" element={ <Protected><Appointment /></Protected>}/>
          {/* <Route path="/Appointment" element={<Appointment />} /> */}
      </Routes>
      <div  className="footer ">
      <div className="titleFooter  scroll-animate"> 
        <h2 > HAPPY SMILE</h2>

        <div className="heroFooter">
       <div  className="footerSection">
          <h4> Contact Us </h4>
          <p>Istanbul /TURKEY </p>
          <p>  +90 555 555 00 00</p>
          <p> info@hsmile.com</p>
          <a href='https://github.com/Mysm-A' target="_blank"> <FaGithub className='gitIcon' /></a>
      </div> 


      <div   className="footerSection">
        <h4> Quick Links</h4>
        <ul>
           <li><a href="#"onClick={(e) => {e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" } ) ; }} > Home </a> </li>
          <li><a href="#" onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('about'); 
              if(section) section.scrollIntoView({ behavior:"smooth" }); }}> About Us</a></li>
          <li><a href="#"  onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById('hours'); 
              if(section) section.scrollIntoView({ behavior:"smooth" }); }}> Working hours</a></li>
        </ul>
      </div>
</div>
      </div>

    
    </div>

    </Router>


    
  );}

export default Web ;