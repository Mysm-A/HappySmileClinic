
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './Appointment.css';

function Appointment() {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] =useState('');
    const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime]=useState('');
  const [ success, setSuccess]=useState('');

  const appointments = [
    { doctor: "Dr. Omar",day: "Monday",times:   ["10:00 AM" , "11:00 AM" , "12:00 AM" , "13:00 PM" ,"14:00 PM" ] },
    { doctor: "Dr. Sara",day: "Tuesday", times:  ["10:00 AM" , "11:00 AM" , "12:00 AM", "13:00 PM" ,"14:00 PM"] },
    { doctor: "Dr. Noah", day: "Wednesday", times: ["10:00 AM" , "11:00 AM" , "12:00 AM" , "13:00 PM" ,"14:00 PM"] },
    { doctor: "Dr. Melissa",day: "Thursday", times: ["10:00 AM" , "11:00 AM" , "12:00 AM" , "13:00 PM" ,"14:00 PM"] },
    { doctor: "Dr. Sophia", day: "Friday", times:   ["10:00 AM" , "11:00 AM" , "12:00 AM", "13:00 PM" ,"14:00 PM"] },
    { doctor: " Dr. Asya", day: "Saturday ", times: ["10:00 AM" , "11:00 AM" , "12:00 AM", "13:00 PM" ,"14:00 PM"] },

  ];

  const handleBook= () => {
    if (selectedDoctor && selectedDay && selectedTime) {
      setSuccess(true); 
      setTimeout(() => {
        setSuccess(false);
        navigate("/"); }, 2000);
    } 
    else {
      alert("please select doctor, day, time");
    }
  };

  return (
    <div className="appointmentSection">
      <div className="blue">
      <h2 className="h2"> HAPPY SMILE ONLINE DENTAL APPOINTMENT</h2>
      </div>
      <div className="purpule">

        
        <label>
          DOCTOR: <select value={selectedDoctor} onChange={(e) => setSelectedDoctor (e.target.value)}>
            <option value={ ''}> Choose </option>
            {appointments.map ((app,index ) => (
              <option key={ index } value={app.doctor}> {app.doctor} </option>
            ))} </select></label>


          <label>
           DAY: <select  value={selectedDay} onChange= {(e) => setSelectedDay (e.target.value)}>
            <option value={ ''}> Choose </option>
            {appointments.map ((app,index ) => (
              <option  key={ index } value={app.day}> {app.day}</option>
            ))}
              </select> </label>
            

              
              <label>TIME: <select value={selectedTime} onChange={(e) => setSelectedTime (e.target.value)} >
               <option value={ ''} >Choose </option>

                 {selectedDoctor && appointments.find(a => a.doctor === selectedDoctor).times.map((time, idx) => (
                 <option key={ idx } value={time}> {time}

                                </option>
                 ))}
                 </select></label>
                 <div className="purpule">
                 <button onClick={handleBook}>  ONLINE DENTAL APPOINTMENT</button>
                 <button onClick={ () => navigate('/') }>LOGOUT</button></div>
                 </div>
                 
                 
             {success && <p className="success"> Appointment booked successfully</p>}

            </div> );
          }



export default Appointment;


