import React, { useState } from 'react'
import axios from 'axios';
import './Register.css';



const Register = () => {
  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("");
  const [number,setNumber] = useState("");
  const [error,setError] = useState(false);
  
  

const handleSubmit = async (e) =>{
e.preventDefault();
setError(false);
try {
  const res = await axios.post("/register", {
    fullname,
    email,
    course,
    number,
  });
  res.data && window.location.replace("/success");

} catch (error) {
 setError(true);
}


}



    return (
        <div className="register" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
        <form className="registerForm"  >
          <label>Full name</label>
          <input className="registerInput" type="text" placeholder="Enter your fullname..."
           onChange={(e)=>{setFullname(e.target.value)}}
          />
          <label>Email</label>
          <input className="registerInput" type="text" placeholder="Enter your email..."
           onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label>Course</label>
          <input className="registerInput" type="text" placeholder="Enter your course choosed..." 
             onChange={(e)=>{setCourse(e.target.value)}}
          />
          <label>Phone Number</label>
          <input className="registerInput" type="number" placeholder="Enter phone number..." 
             onChange={(e)=>{setNumber(e.target.value)}}
          />
          <button className="registerButton" type="submit">Register</button>
        </form>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong</span>} 
      </div>
    )
}

export default Register