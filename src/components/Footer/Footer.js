import './footer.css' ;
import { FaGithub } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { FiInstagram } from "react-icons/fi";
import Image16 from "../../Images/16.png";
import {useNavigate } from "react-router-dom";

const Footer = () => {
const navigate = useNavigate();
      
const goToSection= (sectionId) => {
  if (window.location.pathname === "/"){
  const section=document.getElementById(sectionId);
  if (section) section.scrollIntoView ({behavior: "smooth"});
    } else {navigate("/");
    setTimeout(() => {
    const section=document.getElementById(sectionId);
  if (section) section.scrollIntoView ({behavior: "smooth"});
    } , 300);
    }};
 

    return (
      <div id='footer' className="footer " >
      <div className="titleFooter "> 
        <h2 > HAPPY SMILE</h2>
        <div className='imageShdow'>
        <img src={Image16} alt='footerImage' className='Image16' />
         </div>
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

          <li><a  href='#' onClick={(e) => {
            e.preventDefault(); goToSection("about"); }}> About Us</a></li>

          <li><a href='#about' onClick={(e) => {
            e.preventDefault(); goToSection("hours"); }}> Working hours</a></li>
        </ul>
           </div>

         
      <div className='icons' >
         <a href='https://github.com/Mysm-A' target="_blank">
          <FaGithub className='gitIcon' /></a>
         <a href='https://x.com/' target="_blank">
          <FaXTwitter className='gitIcon' /></a>
         <a href='https://www.instagram.com/' target="_blank">
          <FiInstagram  className='gitIcon' /></a>

      </div> 
    </div>
  </div>
</div>

    )}
export default Footer ;