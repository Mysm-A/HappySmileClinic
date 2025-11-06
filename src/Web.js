import React ,{useEffect} from 'react';
import "./Web.css";
import { Routes, Route ,useNavigate} from 'react-router-dom';
 import Navbar from  './components/Header/Navbar';
  import Image from  './Images/2.jpeg';
 import dental from './Images/dental.png';
import './components/Container/container';
import Container from './components/Container/container';
import Footer from './components/Footer/footer';
import Protected from './components/Container/Protected'; 
import clinicImg from  "./Images/6.png";
import  "./Images/7.jpeg";
import  "./Images/8.jpeg";
import  "./Images/10.jpeg";
import  "./Images/11.jpeg";
import  "./Images/12.jpeg" ;
import "./Images/13.jpeg" ;
import { FaGithub } from "react-icons/fa";
import { MdDescription } from 'react-icons/md';
import Appointment from './components/Container/Appointment' ;
import { FaCircleArrowUp } from "react-icons/fa6";
import Image16h from "./Images/16.png";
import Image15 from "./Images/15.png";
import Services from "./components/Container/Services";

function Web() {
  const navigate = useNavigate();

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
      { id:1 , image: require('./Images/7.jpeg') , name:"Dr.Omar Willy", title:'Orthodontist'  }, 
      { id:2 , image: require('./Images/8.jpeg') , name:"Dr.Noah Roy", title:'Esthetic Dentist'  }, 
      { id:3 , image: require('./Images/10.jpeg') , name:"Dr.Sara Nilly", title:'Orthodontist'  }, 
      { id:4 , image: require('./Images/11.jpeg') , name:"Dr.Melissa Mikay ", title:'Prosthodontist'  }, 
      { id:5 , image: require('./Images/12.jpeg') , name:"Dr.Sophia Khaled", title:'Dental Technician'  }, 
      { id:6 , image: require('./Images/13.jpeg') , name:"Dr.Asya Ali", title:'Dental Technician'  }, 

    ];

  return (
    <>
       <Navbar />
       <a href='#' className='scrollUp' onClick={ (e) =>{e.preventDefault();
        window.scrollTo({top:0, behavior:"smooth"}); }}>
          <FaCircleArrowUp /></a>
       <div id="home"  className="getSmile" >
       <div  className="appointmentContent">

        <h1  className="h1">Healthy Teeth, Beautiful Smiles, Happy Generations</h1>
        <p className="title">
              For a bright and confident smile, we stand by your side with advanced and effective oral care treatments.
        </p>
       <button className="heroBtn" onClick={() => navigate("/Appointment")}>
 Make an Appointment</button>

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

        <div className='image scroll-animate' >
          <img className='zoomImg' src={clinicImg} alt='clinic'/>
        </div>

        <div className='ourDoctors  scroll-animate'>
          <h2 className='drTitle'> Meet Our Doctors</h2>
          <p className='drPraragrapg'>Our clinic was created to make your smile beautiful, healthy and white range of dental treatment and dental restoration</p>
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
          <div className='toothSection'>
          <div className='toothImage'>
        <img src={Image15} alt='16' className='Image15' />
        </div>
        <div className='text'><p>Your Smile Is My Mission |Your Smile Is My Mission | Your Smile Is My Mission 
           | Your Smile Is My Mission | Your Smile Is My Mission |Your Smile Is My Mission |Your Smile Is My Mission |Your Smile Is My Mission | </p></div>
        </div>

        
          </div>
            <div id='hours'  className='hoursSection scroll-animate' > 
               <div className='hoursImageShdow'>
                      <img src={Image16h} alt='hoursImage' className='Image16h' />
              </div>
          <h2  className="h2s" > OUR WORKING HOURS </h2>
             <ul className="time"><li>
                <span>Monday:</span><span> 09:00 - 18:00</span> </li>
              <li>
              <span> Tuesday:</span><span> 09:00 - 18:00 </span></li>
              <li>
                <span>Wednesday:</span><span> 09:00 - 18:00 </span> </li>
              <li>
                <span> Thursday:</span><span> 09:00 - 18:00 </span></li>
              <li>
                <span>Friday: </span><span>09:00 - 18:00</span></li>
              <li>
                <span>Saturday:</span><span> 09:00 - 18:00</span></li>
              <li>
                <span>Sunday: </span><span>--Closed--</span></li>
                
             </ul>
        </div> 
      <Routes>
        < Route path="Appointment" element={<Appointment />}/>
      < Route path="Services" element={<Services />}/>
          {/* <Route path="/Appointment" element={<Appointment />} /> */}
      </Routes>
     <Footer />
</>
    
  );}

export default Web ;