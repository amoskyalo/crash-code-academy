import React,{ useState} from 'react'
//import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

  const [error,setError] = useState(false);


 const sendEmail = (e) => {
 e.preventDefault();
 
 emailjs.sendForm('service_bjrnaqc','template_y707vwi',e.target,'user_DDiWYW49rwBc0ZfRYl7dO')
 .then((result)=>{
   console.log(result.text);
 }, (error) => {
  setError(true);
 });
 e.target.reset()
 };
    return (

      <div className="form" >
        <form  onSubmit={sendEmail} className="contact-form" >
    <div className="form-field">
      <label htmlFor="name">
        <div className="label-content">Name:</div>
        <input type="text" className='input' name="name" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="email">
        <div className="label-content">Email:</div>
        <input type="email" className='input' name="email" required />
      </label>
    </div>

    <div className="form-field">
      <label htmlFor="message">
        <div className="label-content">Message:</div>
        <textarea className="stretch" name="message" rows="5" required />
      </label>
    </div>

    <button type="submit" className='btn'>Send</button>
  </form>
   {error && <span style={{color:"red", marginTop:"10px"}}>Message not sent</span>} 
</div>
    )
}

export default Contact
