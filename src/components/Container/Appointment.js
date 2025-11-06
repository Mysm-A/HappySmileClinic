
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/footer";
import Login from '../login/Login';
import SignUp from '../signup/Signup';
import './Appointment.css';
import "./HeroButton";
import "./Protected";
import "../../Web.css";
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
  const [availableTime, setAvailableTime]= useState([]);
  const [alert , setAlert]= useState("");
  
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
      setAlert("please select doctor, date and time");
    }
  };
  const handleDateChange=(e)=> {
  const date= e.target.value;
  const day= new Date(date).getDay();
  setAlert ("");
  if (day=== 0){
    setAlert('Appointment are Not available on sundays');
    e.target.value= "";
    setSelectedDate("");
    setAvailableSpaces(0) ;
    setAvailableTime([]) ;
    return;
  }
  setSelectedDate(date);
  const spaces= Math.floor(Math.random() *7)  +1;
  setAvailableSpaces(spaces) ;
  if(selectedDoctor) {
    const doctorTime=appointments.find((d)=> d.doctor === selectedDoctor)?.times ||[];
    setAvailableTime(doctorTime.slice (0, spaces));
  }
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
             {selectedDate &&(
              <> <p className="availableSpaces"> {availableSpaces} Available Appointments for this date</p>
            <div className="timeClander">
              {availableTime.map((time,index)=> (
                <div className="timeSection" key={index}>
                 
                 <p className="textTime">{time}</p>
                                 <p className="availableText">1 Space Available</p>

                <button className={` bookTime ${selectedTime ===time ? "active":"" }`}
                onClick={ ()=> setSelectedTime(selectedTime ===time ? "": time)}>
                  Book Appointment  
              </button>
                </div>
              ))} </div>
            </>
          )}
                 <p className="required">* Required fields</p>
                 <div className="purpule">
                 <button className="bookBtn" onClick={handleBook}>  ONLINE DENTAL APPOINTMENT</button>
                 <button  className="bookBtn" onClick={ () => navigate('/') }>LOGOUT</button>
                 </div>
                 </div>
                 
              {alert && <p className="alert">{alert}</p>}  
             {success && <p className="success"> Appointment booked successfully</p>}

            </div>
           
            <Footer />
            </>
             );
          }



export default Appointment;