import {useEffect} from 'react';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/footer';
import { useNavigate} from 'react-router-dom';
import  "../../Images/12.jpeg" ;
import "../../Images/11.jpeg";
import "../../Images/10.jpeg" ;
import "../../Images/7.jpeg";
import "../../Images/8.jpeg";
import '../../Images/13.jpeg';
import "./Services.css";
import "../../Images/15.png";

const Services= () =>{
const navigate = useNavigate() ;
const servicesData =[
    {id:1 , name:"Cavity Protection" ,image: require('../../Images/15.png'),  title :"our cavity-protection treatments use preventive coatings and professional care to shield your teeth from decay and maintain strong enamel"},
    {id:2 , name:"Implant Dentistry" ,image: require('../../Images/15.png'), title :"With dental implants, we replace missing teeth roots with implant posts and natural-looking crowns, restoring your smile and chewing function long-term"},
    {id:3 , name:"Cosmetic Dentistry" ,image: require('../../Images/15.png'), title: "Cosmetic dentistry focuses on improving the appearance of your smile through whitening, veneers, bonding and contouring - giving you a confident, balanced look"},
    {id:4 , name:"Teeth Cleaning" ,image: require('../../Images/15.png'),title: "Professional teeth cleaning removes plaque and tartar buildup that you cannot reach at home - helping prevent gum disease, freshen breath and keep your teeth healthy"},
    {id:5 , name:"Teeth Whitening" ,image: require('../../Images/15.png'), title:"Our teeth-whitening service uses safe, dentist-supervised bleaching to brighten your teeth by several shades and enhance your smile’s radiance"},
    {id:6 , name:"Radiographs" , image: require('../../Images/15.png'), title: "Dental radiographs (X-rays) give your dentist a deeper view beneath the surface - detecting hidden issues like cavities, bone loss or impacted teeth before symptoms appear"},
  ] ;

useEffect(() => {
    const cards = document.querySelectorAll(".servicesCard");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active") ;
          }});
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card)) ;
  }, []);
    
    return (
        <>
        <Navbar />
    
          <div className='ourServices '>
          <h2 className='servicesTitle'>Our Dental Services</h2>
          <p className='servicesPraragrapg'>Our services</p>
          <div className='servicesContainer'>{servicesData.map((service)=> (
            <div className='servicesCard '  key={service.id}>
              <div className='servicesImage'><img src={service.image} alt='dentalServices'/>
            </div>
          <h4 className='serviceNames'>{service.name}</h4>
         <h5 className='servicesTitle'>{service.servicesTitle}</h5> 
        <p className='serviceDescription'>{service.title}</p>
        </div>
       
      ))}
        </div>
      </div>
      <div className='heroButtonDiv'>
        <button className="heroButton" onClick={() => navigate("/Appointment")}>Make an Appointment</button>

      </div>
      <Footer />

    </> );};

export default Services;