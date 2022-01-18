import React, { useState } from 'react'
import {BASE_URL } from '../../config';
import axios from 'axios';
import './Register.css';



const Register = () => {
  const [fullname,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("");
  const [number,setNumber] = useState("");
  const [error,setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

const handleSubmit = async (e) =>{
e.preventDefault();
setError(false);


try {
  setIsFetching(true);
  const res = await axios.post(BASE_URL+"/register", {
    fullname,
    email,
    course,
    number,
  });
  res.data && window.location.replace("/success");
  setIsFetching(false);
 
} catch (error) {
 setError(true);
}


}
    return (
        <div className="register" onSubmit={handleSubmit}>
        <span className="registerTitle">Register</span>
        <form className="registerForm"  >
          <label>Full name</label>
          <input className="registerInput" type="text" name="fullname" placeholder="Enter your fullname..."
          value={fullname}
           onChange={(e)=>{setFullname(e.target.value)}}
          />
          <label>Email</label>
          <input className="registerInput" type="text" name="email" placeholder="Enter your email..."
           value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
          <label>Course</label>
          <input className="registerInput" type="text" name="course" placeholder="Enter your course choosed..." 
          value={course}
             onChange={(e)=>{setCourse(e.target.value)}}
          />
          <label>Phone Number</label>
          <input className="registerInput" type="number" name="number" placeholder="Enter phone number..."
          value={number} 
             onChange={(e)=>{setNumber(e.target.value)}}
          />
          <button className="registerButton" type="submit" disabled={isFetching ? true:false}>
           {isFetching ? "loading..." : "Register" }
            </button>
        </form>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong</span>} 
      </div>
    )
}

export default Register