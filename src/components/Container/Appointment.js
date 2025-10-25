
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/footer";
import Login from '../login/Login';
import SignUp from '../signup/Signup';
import Protected from "./Protected"; 
import './Appointment.css';
import "./HeroButton";
import "./Protected";
import "../../Web.css";
import Image15 from "../../Images/15.png";
import { SiVerdaccio } from "react-icons/si";
function Appointment() {
const [isLogin, setIsLogin]= useState(true);
const [isLoggedIn, setIsLoggedIn]= useState(false);
const handleLoginSuccess=()=> {setIsLoggedIn(true);};
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime]= useState('');
  const [ success, setSuccess]= useState('');
  const [availableSpaces, setAvailableSpaces]= useState(0);
  
  const appointments = [
    { doctor: "Dr.Omar Willy - (Orthodontist)",times:   ["10:00 AM" , "11:00 AM" , "12:00 PM" , "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },
    { doctor: "Dr.Noah Roy - (Esthetic Dentist)",day: "Tuesday", times:  ["10:00 AM" , "11:00 AM" , "12:00 PM", "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },
    { doctor: "Dr.Sara Nilly - (Orthodontist)", times: ["10:00 AM" , "11:00 AM" , "12:00 PM" , "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },
    { doctor: "Dr.Melissa Mikay - (Prosthodontist)", times: ["10:00 AM" , "11:00 AM" , "12:00 PM" , "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },
    { doctor: "Dr.Sophia Khaled - (Dental Technician)", times:   ["10:00 AM" , "11:00 AM" , "12:00 PM", "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },
    { doctor: " Dr.Asya Ali - (Dental Technician)",  times: ["10:00 AM" , "11:00 AM" , "12:00 PM", "13:00 PM" ,"14:00 PM" ,"16:00 PM" ,"18:00 PM"] },

  ];

  const handleBook= () => {
    if (selectedDoctor && selectedDate && selectedTime) {
      setSuccess(true); 
      setTimeout(() => {
        setSuccess(false);
        navigate("/"); }, 3000);
    } 
    else {
      alert("please select doctor, date, time");
    }
  };
  const handleDateChange=(e)=> {
  const date= e.target.value;
  setSelectedDate(date);
  setAvailableSpaces(Math.floor(Math.random() *10)  +1);  
  };

  return (
    <>
    <Navbar />
             {!isLoggedIn &&(
              <div className="loginSectionBox" >
                <div className="LoginBox">
                  {isLogin ? (
                    <Login onSwitch={() => setIsLogin(false)}
                    onLoginSuccess={handleLoginSuccess}/>
                  ):(
                   <SignUp onSwitch={() =>setIsLogin(true)}
                  onLoginSuccess= {handleLoginSuccess}/>
              )}
                </div>
              </div>
             )}
    <div className="appointmentSection">
      <div className="blue">
      <h2 className="h2"> HAPPY SMILE ONLINE DENTAL APPOINTMENT</h2>
      </div>
      <div className="purpule">

        
        <label>
          DOCTOR:* <select value={selectedDoctor} onChange={(e) => setSelectedDoctor (e.target.value)}>
            <option value={ ''}> Select service </option>
            {appointments.map ((app,index ) => (
              <option key={ index } value={app.doctor}> {app.doctor} </option>
            ))} </select></label>


        <label>
          DATE:*<input  className="dateInput" type="date" value={selectedDate} 
            onChange={handleDateChange} min={new Date().toISOString().split('T' ) [ 0 ] } 
            />
            </label>
             {selectedDate &&( <p className="availableSpaces"> {availableSpaces} Available Appointments for this date</p>)}
              
              <label>TIME:* <select value={selectedTime} onChange={(e) => setSelectedTime (e.target.value)} >
               <option value={ ''} >Select time </option>

                 {selectedDoctor && appointments.find(a => a.doctor === selectedDoctor).times.map((time, idx) => (
                 <option key={ idx } value={time}> {time}

               </option>
                 ))}
                 </select><p className="required">* Required fields</p>
                 </label>
                 <div className="purpule">
                 <button onClick={handleBook}>  ONLINE DENTAL APPOINTMENT</button>
                 <button onClick={ () => navigate('/') }>LOGOUT</button></div>
                 </div>
                 
                 
             {success && <p className="success"> Appointment booked successfully</p>}

            </div>
           
            <Footer />
            </>
             );
          }



export default Appointment;


